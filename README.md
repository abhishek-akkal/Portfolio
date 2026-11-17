# Portfolio — Personal Developer Portfolio

A personal developer portfolio built with **React.js and Tailwind CSS**, designed to look and feel like an interactive desktop environment.

Instead of using a traditional portfolio layout, this project presents my work, skills, education, and contact information through a computer-inspired interface with interactive desktop elements, draggable windows, custom animations, and a responsive design.

The goal was to create something more interactive than a standard portfolio while keeping the experience simple and easy to navigate.

---

## 🌐 Live Website

**[Visit My Portfolio](https://portfolio-ten-dusky-25.vercel.app/)**

## 🔗 Project Links

| Resource          | Link                                                                            |
| ----------------- | ------------------------------------------------------------------------------- |
| Live Website      | [portfolio-ten-dusky-25.vercel.app](https://portfolio-ten-dusky-25.vercel.app/) |
| GitHub Repository | [Portfolio Repository](https://github.com/abhishek-akkal/Portfolio)             |
| GitHub Profile    | [abhishek-akkal](https://github.com/abhishek-akkal)                             |

---

## ✨ Features

### 🖥️ Desktop-Inspired Interface

- Computer-like portfolio interface.
- Desktop-inspired layout with different interactive sections.
- Custom desktop icons and navigation elements.
- Clean, dark-themed visual design.

### 🎨 Interactive UI

- Custom cursor.
- Animated dot-grid background.
- Interactive desktop elements.
- Draggable application-style windows.
- Smooth transitions and animations.

### 📂 Portfolio Sections

- About Me — Personal introduction and background.
- Projects — Showcase of development projects.
- Skills — Technologies and tools I work with.
- Education — Academic background.
- Contact — Ways to connect with me.
- Additional interactive windows and sections.

### 🚀 Animated Introduction

- Custom startup-style introduction.
- Different device layouts for desktop, tablet, and mobile.
- Animated device transitions.

### 📱 Responsive Design

- Desktop, tablet, and mobile layouts.
- Responsive navigation and content sections.
- Adapted interactive elements for smaller screens.

---

## 🛠️ Technologies Used

| Technology        | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| React.js          | Building the user interface and reusable components |
| JavaScript (ES6+) | Application logic and interactivity                 |
| Tailwind CSS      | Styling and responsive layouts                      |
| CSS3              | Custom animations, transitions, and visual effects  |
| Vite              | Development server and build tooling                |
| React Icons       | Icons throughout the interface                      |
| Git & GitHub      | Version control and source code management          |
| Vercel            | Website deployment and hosting                      |

---

## 📁 Project Structure

```text
Portfolio/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── ProfileIMG.png
│   │
│   ├── DesktopSections/
│   │   ├── AboutWindow.jsx
│   │   ├── CenterDestopSection.jsx
│   │   ├── ContactWindow.jsx
│   │   ├── EducationWindow.jsx
│   │   ├── FilesWindow.jsx
│   │   ├── LeftDesktopSection.jsx
│   │   ├── MessageWindow.jsx
│   │   ├── ProjectsWindow.jsx
│   │   ├── RightDesktopSection.jsx
│   │   └── SkillsWindow.jsx
│   │
│   ├── Navbar/
│   │   └── Navbar.jsx
│   │
│   ├── ProjectsWindow/
│   │   ├── AnimeVerse.jsx
│   │   ├── CalculatorWindow.jsx
│   │   ├── CurrencyConverterWindow.jsx
│   │   ├── DsCreationsWindow.jsx
│   │   ├── GalleryAppWindow.jsx
│   │   ├── GameWindow.jsx
│   │   ├── LeetCodeWindow.jsx
│   │   ├── MaisonCafeWindow.jsx
│   │   ├── MomentWindow.jsx
│   │   ├── MoreProjectsWindow.jsx
│   │   ├── PortfolioWindow.jsx
│   │   ├── ResumeWindow.jsx
│   │   ├── ThemeVerseWindow.jsx
│   │   ├── TicTacToeWindow.jsx
│   │   └── WeatherAppWindow.jsx
│   │
│   ├── App.jsx
│   ├── CustomCursor.jsx
│   ├── DotGrid.jsx
│   ├── index.css
│   ├── Intro.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

### 📌 Folder Explanation

**`public/`**

- Contains public static assets used by the application.

**`src/assets/`**

- Stores images and other assets used inside React components.

**`src/DesktopSections/`**

- Contains the main desktop sections and application windows, including About, Contact, Education, Skills, Projects, and other interface elements.

**`src/Navbar/`**

- Contains the navigation bar component.

**`src/ProjectsWindow/`**

- Contains individual project windows used to showcase projects such as AnimeVerse, DS Creations, Maison Café, Weather App, and other applications.

**Main Components**

- `App.jsx` — Main application component that brings the portfolio interface together.
- `CustomCursor.jsx` — Handles the custom cursor.
- `DotGrid.jsx` — Creates the interactive dot-grid background.
- `Intro.jsx` — Handles the animated startup introduction.
- `main.jsx` — Application entry point.
- `index.css` — Global styling and custom CSS.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/abhishek-akkal/Portfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd Portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173/
```

### 5. Build for Production

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

---

## 🚀 Deployment

This project is deployed using **Vercel** and connected to its GitHub repository.

Live deployment:

[https://portfolio-ten-dusky-25.vercel.app/](https://portfolio-ten-dusky-25.vercel.app/)

The project uses Vite, and Vercel handles the production build and deployment.

---

## 🎯 Project Goals

- Build a unique and interactive personal portfolio.
- Improve React component architecture and reusability.
- Practice responsive web design.
- Experiment with CSS animations and interactive UI elements.
- Improve JavaScript and frontend development skills.
- Create a central place to showcase my projects and technical skills.

---

## 📚 What I Learned

While developing this project, I worked on:

- Structuring a React application into reusable components.
- Managing interactive UI elements and application windows.
- Creating custom cursor effects and animated backgrounds.
- Implementing responsive layouts for multiple screen sizes.
- Working with Tailwind CSS and custom CSS.
- Organizing project showcases into separate components.
- Deploying a React application using Vercel.
- Managing source code using Git and GitHub.

---

## 👨‍💻 Author

**Abhishek Akkal**

- GitHub: [@abhishek-akkal](https://github.com/abhishek-akkal)
- Portfolio: [Visit Website](https://portfolio-ten-dusky-25.vercel.app/)

---

⭐ If you like this project, consider giving the repository a star!

Thanks for visiting my portfolio repository.
