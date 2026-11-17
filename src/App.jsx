import React, { useState } from "react";

import DotGrid from "./DotGrid";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar/Navbar";

import LeftDesktopSection from "./DesktopSections/LeftDesktopSection";
import CenterDestopSection from "./DesktopSections/CenterDestopSection";
import RightDesktopSection from "./DesktopSections/RightDesktopSection";

import AboutWindow from "./DesktopSections/AboutWindow";
import EducationWindow from "./DesktopSections/EducationWindow";
import SkillsWindow from "./DesktopSections/SkillsWindow";
import ProjectsWindow from "./DesktopSections/ProjectsWindow";
import ContactWindow from "./DesktopSections/ContactWindow";
import MessageWindow from "./DesktopSections/MessageWindow";
import FilesWindow from "./DesktopSections/FilesWindow";

import PortfolioWindow from "./ProjectsWindow/PortfolioWindow";
import AnimeVerseWindow from "./ProjectsWindow/AnimeVerse";
import MomentWindow from "./ProjectsWindow/MomentWindow";
import WeatherAppWindow from "./ProjectsWindow/WeatherAppWindow";
import MaisonCafeWindow from "./ProjectsWindow/MaisonCafeWindow";
import CurrencyConverterWindow from "./ProjectsWindow/CurrencyConverterWindow";
import TicTacToeWindow from "./ProjectsWindow/TicTacToeWindow";
import CalculatorWindow from "./ProjectsWindow/CalculatorWindow";
import DsCreationsWindow from "./ProjectsWindow/DsCreationsWindow";
import ThemeVerseWindow from "./ProjectsWindow/ThemeVerseWindow";
import GalleryAppWindow from "./ProjectsWindow/GalleryAppWindow";
import ResumeWindow from "./ProjectsWindow/ResumeWindow";
import LeetCodeWindow from "./ProjectsWindow/LeetCodeWindow";
import MoreProjectsWindow from "./ProjectsWindow/MoreProjectsWindow";
import GameWindow from "./ProjectsWindow/GameWindow";
import Intro from "./Intro";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Central window manager
  const [windowManager, setWindowManager] = useState({
    open: {
      about: true,
    },
    positions: {
      about: { x: 0, y: 0 },
    },
    zIndices: {
      about: 20,
    },
    nextZIndex: 21,
  });

  // Open a window or bring an existing window to the front
  const openWindow = (id) => {
    setWindowManager((prev) => {
      const zIndex = prev.nextZIndex;

      // If already open, bring it to the front
      if (prev.open[id]) {
        return {
          ...prev,
          zIndices: {
            ...prev.zIndices,
            [id]: zIndex,
          },
          nextZIndex: zIndex + 1,
        };
      }

      // Count only currently open windows
      const activeWindowCount = Object.values(prev.open).filter(Boolean).length;

      let x = 0;
      let y = 0;

      // First window always opens in the center
      if (activeWindowCount > 0) {
        const step = Math.ceil(activeWindowCount / 2) * 35;
        const direction = activeWindowCount % 2 === 1 ? 1 : -1;

        x = step * direction;
        y = (step / 35) * 15 * direction;
      }

      return {
        ...prev,
        open: {
          ...prev.open,
          [id]: true,
        },
        positions: {
          ...prev.positions,
          [id]: { x, y },
        },
        zIndices: {
          ...prev.zIndices,
          [id]: zIndex,
        },
        nextZIndex: zIndex + 1,
      };
    });
  };

  // Close a window and remove its stored position
  const closeWindow = (id) => {
    setWindowManager((prev) => {
      const open = { ...prev.open };
      const positions = { ...prev.positions };
      const zIndices = { ...prev.zIndices };

      delete open[id];
      delete positions[id];
      delete zIndices[id];

      return {
        ...prev,
        open,
        positions,
        zIndices,
      };
    });
  };

  // Bring a window to the front
  const focusWindow = (id) => {
    setWindowManager((prev) => ({
      ...prev,
      zIndices: {
        ...prev.zIndices,
        [id]: prev.nextZIndex,
      },
      nextZIndex: prev.nextZIndex + 1,
    }));
  };

  // Update a window's position while dragging
  const updateWindowPosition = (id, position) => {
    setWindowManager((prev) => ({
      ...prev,
      positions: {
        ...prev.positions,
        [id]: position,
      },
    }));
  };

  // Shared props passed to every window
  const getWindowProps = (id) => ({
    position: windowManager.positions[id] || { x: 0, y: 0 },
    zIndex: windowManager.zIndices[id] || 20,
    onPositionChange: (position) => updateWindowPosition(id, position),
    onFocus: () => focusWindow(id),
    onClose: () => closeWindow(id),
  });

  return (
    <div className="min-h-screen cursor-none bg-[#080b12] text-white">
      <Navbar
        onOpenAbout={() => openWindow("about")}
        onOpenFiles={() => openWindow("files")}
        onOpenContact={() => openWindow("contact")}
        onOpenMessage={() => openWindow("message")}
      />

      <main className="relative h-[calc(100vh-48px)] overflow-hidden max-[950px]:overflow-x-hidden max-[950px]:overflow-y-auto">
        <DotGrid />

        {/* Main Desktop Sections */}
        <div className="relative z-10 flex min-h-[calc(100vh-48px)] items-center justify-between gap-6 p-6 max-[950px]:min-h-[calc(100dvh-48px)] max-[950px]:flex-col max-[950px]:items-stretch max-[950px]:justify-start max-[950px]:gap-4 max-[950px]:p-4 max-[950px]:pb-28">
          <LeftDesktopSection
            onOpenAbout={() => openWindow("about")}
            onOpenEducation={() => openWindow("education")}
            onOpenSkills={() => openWindow("skills")}
            onOpenProjects={() => openWindow("projects")}
          />

          <RightDesktopSection />
        </div>

        {/* Desktop Windows */}
        {windowManager.open.files && (
          <FilesWindow
            {...getWindowProps("files")}
            onOpenAbout={() => openWindow("about")}
            onOpenEducation={() => openWindow("education")}
            onOpenSkills={() => openWindow("skills")}
            onOpenProjects={() => openWindow("projects")}
            onOpenContact={() => openWindow("contact")}
            onOpenMessage={() => openWindow("message")}
          />
        )}

        {windowManager.open.about && (
          <AboutWindow {...getWindowProps("about")} />
        )}

        {windowManager.open.education && (
          <EducationWindow {...getWindowProps("education")} />
        )}

        {windowManager.open.skills && (
          <SkillsWindow {...getWindowProps("skills")} />
        )}

        {windowManager.open.projects && (
          <ProjectsWindow
            {...getWindowProps("projects")}
            onOpenPortfolio={() => openWindow("portfolio")}
            onOpenAnimeVerse={() => openWindow("animeVerse")}
            onMoment={() => openWindow("moment")}
            onWeatherApp={() => openWindow("weatherApp")}
            onMaisonCafe={() => openWindow("maisonCafe")}
            onCurrencyConverter={() => openWindow("currencyConverter")}
            onTicTacToe={() => openWindow("ticTacToe")}
            onCalculator={() => openWindow("calculator")}
            onDsCreations={() => openWindow("dsCreations")}
            onThemeVerse={() => openWindow("themeVerse")}
            onGalleryApp={() => openWindow("galleryApp")}
            onResume={() => openWindow("resume")}
            onLeetCode={() => openWindow("leetCode")}
            onMoreProjects={() => openWindow("moreProjects")}
            onGame={() => openWindow("game")}
          />
        )}

        {/* Project Windows */}
        {windowManager.open.portfolio && (
          <PortfolioWindow {...getWindowProps("portfolio")} />
        )}

        {windowManager.open.animeVerse && (
          <AnimeVerseWindow {...getWindowProps("animeVerse")} />
        )}

        {windowManager.open.moment && (
          <MomentWindow {...getWindowProps("moment")} />
        )}

        {windowManager.open.weatherApp && (
          <WeatherAppWindow {...getWindowProps("weatherApp")} />
        )}

        {windowManager.open.maisonCafe && (
          <MaisonCafeWindow {...getWindowProps("maisonCafe")} />
        )}

        {windowManager.open.currencyConverter && (
          <CurrencyConverterWindow {...getWindowProps("currencyConverter")} />
        )}

        {windowManager.open.ticTacToe && (
          <TicTacToeWindow {...getWindowProps("ticTacToe")} />
        )}

        {windowManager.open.calculator && (
          <CalculatorWindow {...getWindowProps("calculator")} />
        )}

        {windowManager.open.dsCreations && (
          <DsCreationsWindow {...getWindowProps("dsCreations")} />
        )}

        {windowManager.open.themeVerse && (
          <ThemeVerseWindow {...getWindowProps("themeVerse")} />
        )}

        {windowManager.open.galleryApp && (
          <GalleryAppWindow {...getWindowProps("galleryApp")} />
        )}

        {windowManager.open.resume && (
          <ResumeWindow {...getWindowProps("resume")} />
        )}

        {windowManager.open.leetCode && (
          <LeetCodeWindow {...getWindowProps("leetCode")} />
        )}

        {windowManager.open.moreProjects && (
          <MoreProjectsWindow {...getWindowProps("moreProjects")} />
        )}

        {windowManager.open.game && <GameWindow {...getWindowProps("game")} />}

        {/* Contact and Message Windows */}
        {windowManager.open.contact && (
          <ContactWindow {...getWindowProps("contact")} />
        )}

        {windowManager.open.message && (
          <MessageWindow {...getWindowProps("message")} />
        )}

        <CenterDestopSection onOpenFiles={() => openWindow("files")} />
      </main>

      {/* Intro Screen */}
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      <CustomCursor />
    </div>
  );
};

export default App;
