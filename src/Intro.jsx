import React, { useEffect, useState } from "react";

const Intro = ({ onComplete }) => {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const powerTimer = setTimeout(() => {
      setIsPoweredOn(true);
    }, 1500);

    const zoomTimer = setTimeout(() => {
      setIsZooming(true);
    }, 7000);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 8500);

    return () => {
      clearTimeout(powerTimer);
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-stage ${isZooming ? "intro-stage-zooming" : ""}`}>
      <div className="intro-background-glow" />

      <div className={`monitor-wrapper ${isZooming ? "monitor-zoom" : ""}`}>
        <div className="monitor">
          {/* Device Frame */}
          <div className="monitor-frame">
            {/* Mobile Speaker */}
            <div className="mobile-speaker" />

            {/* Screen */}
            <div className={`monitor-screen ${isPoweredOn ? "screen-on" : ""}`}>
              {!isPoweredOn ? (
                <div className="screen-off" />
              ) : (
                <div className="boot-screen">
                  <div className="boot-content">
                    <div className="boot-header">
                      <span className="boot-indicator" />
                      <span>SYSTEM STARTUP</span>
                    </div>

                    <div className="boot-messages">
                      <p>INITIALIZING SYSTEM...</p>
                      <p>CHECKING SYSTEM COMPONENTS...</p>
                      <p>LOADING DESKTOP ENVIRONMENT...</p>
                      <p>PREPARING WORKSPACE...</p>
                      <p className="system-ready">SYSTEM READY.</p>
                    </div>

                    <div className="progress-section">
                      <div className="progress-info">
                        <span>LOADING</span>
                        <span>100%</span>
                      </div>

                      <div className="progress-track">
                        <div className="progress-fill" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Bottom Bezel */}
            <div className="monitor-bottom">
              <div className="monitor-power-light">
                <span className={isPoweredOn ? "power-light-active" : ""} />
              </div>
            </div>
          </div>

          {/* Tablet Folio Support */}
          <div className="monitor-stand" />
          <div className="monitor-base" />

          {/* Tablet Pencil */}
          <div className="tablet-pencil">
            <div className="pencil-tip" />
          </div>
        </div>
      </div>

      <style>{`
        .intro-stage {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 50% 30%,
              rgba(55, 112, 174, 0.32),
              transparent 58%
            ),
            linear-gradient(
              180deg,
              #14243a 0%,
              #0b1728 55%,
              #050b14 100%
            );
        }

        .intro-background-glow {
          position: absolute;
          width: 85vw;
          height: 70vh;
          top: 0;
          left: 7.5%;
          background: radial-gradient(
            ellipse,
            rgba(66, 140, 220, 0.15),
            transparent 70%
          );
          filter: blur(55px);
        }

        .monitor-wrapper {
          position: relative;
          z-index: 2;
          width: min(76vw, 920px);
          transition:
            transform 1.4s cubic-bezier(0.65, 0, 0.25, 1),
            opacity 1.4s ease;
          transform-origin: center center;
        }

        .monitor {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          filter: drop-shadow(0 35px 35px rgba(0, 0, 0, 0.65));
          position: relative;
        }

        /* Desktop Monitor Frame */

        .monitor-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          padding: 15px 15px 17px;
          border-radius: 4px;
          background: linear-gradient(
            145deg,
            #17212e,
            #02050a 65%,
            #111b27
          );
          border: 1px solid #29394c;
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.12),
            0 0 0 3px rgba(0,0,0,0.55),
            0 0 30px rgba(43,116,190,0.08);
        }

        .monitor-screen {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          background: #000;
          border: 1px solid #111b27;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.9);
        }

        .screen-off {
          width: 100%;
          height: 100%;
          background: #010204;
        }

        .screen-on {
          animation: screenPowerOn 1.2s ease-out forwards;
        }

        @keyframes screenPowerOn {
          0% {
            background: #000;
            box-shadow: inset 0 0 30px #000;
          }
          35% {
            background: #10243a;
          }
          100% {
            background: #050c16;
            box-shadow: inset 0 0 40px rgba(40,110,180,0.1);
          }
        }

        /* Boot Screen */

        .boot-screen {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6%;
          color: #a9c9e9;
          font-family: "Courier New", monospace;
          background:
            radial-gradient(
              ellipse at center,
              rgba(26,72,116,0.25),
              transparent 75%
            ),
            #050c16;
          animation: bootAppear 1s ease forwards;
        }

        @keyframes bootAppear {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .boot-content {
          width: min(100%, 510px);
        }

        .boot-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: #7cbcff;
          font-size: clamp(9px, 1.1vw, 14px);
          letter-spacing: 3px;
        }

        .boot-indicator {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #53b9ff;
          box-shadow: 0 0 12px #53b9ff;
          animation: bootBlink 1s infinite alternate;
        }

        @keyframes bootBlink {
          from { opacity: 0.35; }
          to { opacity: 1; }
        }

        .boot-messages {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: clamp(9px, 1vw, 13px);
          letter-spacing: 1.5px;
        }

        .boot-messages p {
          margin: 0;
          opacity: 0;
          animation: messageAppear 0.5s ease forwards;
        }

        .boot-messages p:nth-child(1) { animation-delay: 0.3s; }
        .boot-messages p:nth-child(2) { animation-delay: 1s; }
        .boot-messages p:nth-child(3) { animation-delay: 1.7s; }
        .boot-messages p:nth-child(4) { animation-delay: 2.4s; }
        .boot-messages p:nth-child(5) { animation-delay: 3.1s; }

        @keyframes messageAppear {
          to { opacity: 1; }
        }

        .system-ready {
          color: #72d5a3;
        }

        /* Progress Bar */

        .progress-section {
          margin-top: 32px;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 9px;
          color: #7da2c8;
          font-size: clamp(8px, 0.9vw, 11px);
          letter-spacing: 2px;
        }

        .progress-info span:last-child {
          color: #72d5a3;
        }

        .progress-track {
          width: 100%;
          height: 4px;
          border-radius: 20px;
          background: #1a2b40;
          overflow: hidden;
        }

        .progress-fill {
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #2477bd, #70c9ff);
          box-shadow: 0 0 12px rgba(75,174,255,0.8);
          animation: progressLoading 5s linear 0.2s forwards;
        }

        @keyframes progressLoading {
          to { width: 100%; }
        }

        /* Desktop Monitor Details */

        .monitor-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 17px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 20px;
        }

        .monitor-power-light {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #263444;
        }

        .monitor-power-light span {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transition: all 0.5s ease;
        }

        .power-light-active {
          background: #52bfff;
          box-shadow: 0 0 9px #52bfff;
        }

        .monitor-stand {
          width: 9%;
          height: 85px;
          background: linear-gradient(
            90deg,
            #05090e,
            #182330 48%,
            #05090e
          );
          border-left: 1px solid #1a2939;
          border-right: 1px solid #1a2939;
        }

        .monitor-base {
          width: 48%;
          height: 30px;
          background: linear-gradient(
            180deg,
            #172332,
            #080d14 70%
          );
          border: 1px solid #263649;
          border-radius: 3px 3px 9px 9px;
          transform: perspective(180px) rotateX(8deg);
          box-shadow: 0 9px 16px rgba(0,0,0,0.55);
        }

        .tablet-pencil,
        .mobile-speaker {
          display: none;
        }

        /* Zoom Transition */

        .monitor-zoom {
          transform: scale(3.5);
          opacity: 0;
        }

        .intro-stage-zooming {
          background: #000;
        }

        .intro-stage-zooming .intro-background-glow {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        /* Tablet Intro: 401px - 799px */

       @media (min-width: 401px) and (max-width: 1055px) {
          .monitor-wrapper {
            width: min(86vw, 680px);
          }

          .monitor {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding-bottom: 42px;
          }

          .monitor-frame {
            width: calc(100% - 38px);
            flex-shrink: 0;
            aspect-ratio: 16 / 10;
            padding: 10px;
            border-radius: 17px;
            border: 2px solid #263d59;
            background: linear-gradient(
              145deg,
              #263b54,
              #070d18 60%,
              #172a40
            );
            box-shadow:
              inset 0 1px 3px rgba(255,255,255,0.13),
              0 0 0 3px #02050b,
              0 0 25px rgba(59,130,246,0.18);
            z-index: 2;
          }

          .monitor-screen {
            border-radius: 9px;
            border: 1px solid #1d3552;
          }

          .monitor-bottom {
            height: 12px;
            padding: 0 13px;
          }

          /* Folio cover extending forward */

          .monitor::before {
            content: "";
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 3%;
            width: 83%;
            height: 43px;
            border: 1px solid #304967;
            border-radius: 3px 3px 12px 12px;
            background: linear-gradient(
              180deg,
              #172a42,
              #080f1c 75%,
              #111f32
            );
            box-shadow:
              0 9px 18px rgba(0,0,0,0.55),
              inset 0 1px 2px rgba(255,255,255,0.08);
            transform: perspective(240px) rotateX(8deg);
          }

          /* Folded triangular support */

          .monitor-stand {
            position: absolute;
            z-index: 0;
            bottom: 28px;
            left: 30%;
            width: 38%;
            height: 65px;
            border: 1px solid #263d59;
            background: linear-gradient(
              90deg,
              #080f1c,
              #203a57 50%,
              #080f1c
            );
            clip-path: polygon(0 0, 100% 0, 78% 100%, 22% 100%);
          }

          .monitor-base {
            display: none;
          }

          /* Pencil on the right */

          .tablet-pencil {
            display: block;
            position: relative;
            z-index: 3;
            width: 9px;
            height: clamp(170px, 26vw, 235px);
            flex-shrink: 0;
            border: 1px solid #31445d;
            border-radius: 6px;
            background: linear-gradient(
              90deg,
              #03070e,
              #1d2c40 45%,
              #070c15
            );
            box-shadow:
              2px 5px 10px rgba(0,0,0,0.55),
              inset 1px 0 2px rgba(255,255,255,0.12);
          }

          .tablet-pencil::before {
            content: "";
            position: absolute;
            top: -9px;
            left: 1px;
            width: 5px;
            height: 10px;
            background: #9bb9d8;
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
          }

          .pencil-tip {
            position: absolute;
            bottom: 8px;
            left: 2px;
            width: 3px;
            height: 5px;
            border-radius: 2px;
            background: #52769b;
          }

          .boot-header {
            margin-bottom: 18px;
            letter-spacing: 2px;
          }

          .boot-messages {
            gap: 8px;
            letter-spacing: 1px;
          }

          .progress-section {
            margin-top: 22px;
          }

          .monitor-zoom {
            transform: scale(4);
          }
        }

        /* Mobile Intro: 400px and below */

        @media (max-width: 400px) {
          .monitor-wrapper {
            width: min(62vw, 245px);
          }

          .monitor {
            flex-direction: column;
            align-items: center;
          }

          .monitor-frame {
            width: 100%;
            aspect-ratio: 9 / 16;
            padding: 12px 9px;
            border-radius: 27px;
            border: 2px solid #263d59;
            background: linear-gradient(
              145deg,
              #263b54,
              #070d18 60%,
              #172a40
            );
            box-shadow:
              inset 0 1px 3px rgba(255,255,255,0.13),
              0 0 0 3px #02050b,
              0 0 28px rgba(59,130,246,0.2);
          }

          .monitor-screen {
            border-radius: 17px;
            border: 1px solid #1d3552;
          }

          .mobile-speaker {
            display: block;
            position: absolute;
            z-index: 4;
            top: 5px;
            left: 50%;
            width: 35px;
            height: 3px;
            border-radius: 10px;
            background: #263d59;
            transform: translateX(-50%);
          }

          .monitor-bottom {
            height: 10px;
            padding: 0 12px;
          }

          .monitor-stand,
          .monitor-base,
          .tablet-pencil {
            display: none;
          }

          .boot-screen {
            padding: 9%;
          }

          .boot-content {
            width: 100%;
          }

          .boot-header {
            gap: 7px;
            margin-bottom: 24px;
            font-size: 9px;
            letter-spacing: 1.3px;
          }

          .boot-indicator {
            width: 6px;
            height: 6px;
          }

          .boot-messages {
            gap: 13px;
            font-size: 8px;
            letter-spacing: 0.4px;
            line-height: 1.5;
          }

          .progress-section {
            margin-top: 35px;
          }

          .progress-info {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .progress-track {
            height: 3px;
          }

          .monitor-zoom {
            transform: scale(4.5);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .monitor-wrapper,
          .screen-on,
          .boot-screen,
          .progress-fill,
          .boot-messages p {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
