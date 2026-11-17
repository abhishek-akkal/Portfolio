import React, { useState, useRef } from "react";
import { LuGamepad2, LuX, LuRefreshCw, LuTarget } from "react-icons/lu";

const generateNumber = () => Math.floor(Math.random() * 100) + 1;

const GameWindow = ({
  onClose,
  position,
  zIndex,
  onPositionChange,
  onFocus,
}) => {
  const dragRef = useRef(null);

  const [secretNumber, setSecretNumber] = useState(generateNumber);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("Enter a number between 1 and 100.");
  const [gameWon, setGameWon] = useState(false);

  const handlePointerDown = (e) => {
    onFocus?.();

    if (e.target.closest("button, a, input")) return;

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;

    const { startX, startY, initialX, initialY } = dragRef.current;

    onPositionChange?.({
      x: initialX + e.clientX - startX,
      y: initialY + e.clientY - startY,
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  const handleGuess = (e) => {
    e.preventDefault();

    const number = Number(guess);

    if (
      !guess.trim() ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > 100
    ) {
      setMessage("Please enter a valid number between 1 and 100.");
      return;
    }

    if (gameWon) return;

    setAttempts((prev) => prev + 1);

    if (number === secretNumber) {
      setMessage(`Correct! You guessed the number ${secretNumber}.`);
      setGameWon(true);
    } else if (number < secretNumber) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }

    setGuess("");
  };

  const resetGame = () => {
    setSecretNumber(generateNumber());
    setGuess("");
    setAttempts(0);
    setMessage("Enter a number between 1 and 100.");
    setGameWon(false);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        zIndex,
      }}
      className="absolute left-1/2 top-[calc(50%-50px)] flex h-120 max-h-[calc(100vh-80px)] w-[90%] max-w-2xl flex-col border border-blue-300/40 bg-[#080b12]/95 shadow-[8px_8px_0px_#000] backdrop-blur-md cursor-none"
    >
      {/* Window Header */}
      <div className="flex h-11 shrink-0 select-none items-center justify-between border-b border-blue-300/30 px-4">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
          <LuGamepad2 className="text-blue-300" size={19} />
          <span>GUESS_THE_NUMBER.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close game window"
        >
          <LuX size={20} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div
        className="
          min-h-0 flex-1 overflow-y-auto cursor-none
          p-5 font-mono text-sm leading-relaxed text-slate-300 sm:p-7
          [scrollbar-color:#527ba8_#080b12]
          [&::-webkit-scrollbar]:w-3.5
          [&::-webkit-scrollbar-track]:bg-[#080b12]
          [&::-webkit-scrollbar-track]:border-l
          [&::-webkit-scrollbar-track]:border-blue-300/30
          [&::-webkit-scrollbar-thumb]:bg-[#294564]
          [&::-webkit-scrollbar-thumb]:border-2
          [&::-webkit-scrollbar-thumb]:border-[#080b12]
          [&::-webkit-scrollbar-thumb:hover]:bg-blue-300
        "
      >
        {/* Game Title */}
        <div className="mb-7 border-b border-blue-300/30 pb-5">
          <h2 className="mb-2 text-2xl font-bold tracking-wider text-blue-300">
            Guess the Number
          </h2>

          <p className="text-xs text-slate-400">
            A Simple Number Guessing Game
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            I'm thinking of a number between 1 and 100. Can you guess it? Enter
            your guess and I'll tell you if it's too high or too low.
          </p>
        </div>

        {/* Game Area */}
        <section className="mb-7">
          <div className="border border-blue-300/30 bg-blue-300/5 p-5 sm:p-7">
            <div className="mb-6 flex flex-col items-center text-center">
              <LuTarget size={34} className="mb-3 text-blue-300" />

              <p className="text-xs tracking-widest text-slate-400">
                YOUR CHALLENGE
              </p>

              <p className="mt-2 text-4xl font-bold text-blue-300">1 - 100</p>

              <p className="mt-2 text-xs text-slate-500">
                Find the hidden number
              </p>
            </div>

            <form onSubmit={handleGuess}>
              <label
                htmlFor="numberGuess"
                className="mb-2 block text-xs text-slate-400"
              >
                ENTER YOUR GUESS
              </label>

              <input
                id="numberGuess"
                type="number"
                min="1"
                max="100"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                disabled={gameWon}
                placeholder="Enter a number..."
                className="w-full cursor-none border border-blue-300/30 bg-[#080b12] px-4 py-3 font-mono text-sm text-blue-200 outline-none placeholder:text-slate-600 focus:border-blue-300 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={gameWon}
                className="mt-3 w-full cursor-none border border-blue-300 bg-blue-300/10 px-4 py-3 text-xs font-bold tracking-widest text-blue-300 transition-colors hover:bg-blue-300/20 disabled:cursor-none disabled:opacity-40"
              >
                CHECK MY GUESS
              </button>
            </form>

            {/* Game Feedback */}
            <div
              className={`mt-5 border p-4 text-center ${
                gameWon
                  ? "border-green-400/40 bg-green-400/5 text-green-300"
                  : "border-blue-300/20 bg-[#080b12]/60 text-slate-300"
              }`}
            >
              <p className="text-xs leading-6">{message}</p>
            </div>

            {/* Attempts */}
            <div className="mt-5 flex items-center justify-between border-t border-blue-300/20 pt-4">
              <span className="text-xs text-slate-400">ATTEMPTS</span>
              <span className="font-bold text-blue-300">{attempts}</span>
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={resetGame}
              className="mt-5 flex w-full cursor-none items-center justify-center gap-2 border border-blue-300/40 px-4 py-3 text-xs font-bold tracking-widest text-slate-300 transition-colors hover:border-blue-300 hover:bg-blue-300/10 hover:text-blue-300"
            >
              <LuRefreshCw size={15} />
              NEW GAME
            </button>
          </div>
        </section>

        {/* How to Play */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            HOW TO PLAY
          </h3>

          <div className="space-y-2 text-xs leading-6 text-slate-400">
            <p>
              <span className="mr-2 text-blue-300">›</span>
              Enter any whole number between 1 and 100.
            </p>
            <p>
              <span className="mr-2 text-blue-300">›</span>
              If your guess is too low, try a higher number.
            </p>
            <p>
              <span className="mr-2 text-blue-300">›</span>
              If your guess is too high, try a lower number.
            </p>
            <p>
              <span className="mr-2 text-blue-300">›</span>
              Guess correctly to win and start a new game.
            </p>
          </div>
        </section>

        {/* Contact Footer */}
        <div className="mt-8 border border-blue-300/40 bg-blue-300/5 px-4 py-5 text-center">
          <p className="font-mono text-xs leading-relaxed text-slate-300 sm:text-sm">
            Check out my{" "}
            <a
              href="https://github.com/abhishek-akkal"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none font-bold text-blue-300 underline underline-offset-4 transition-colors hover:text-blue-100"
            >
              GitHub
            </a>{" "}
            or DM me on X{" "}
            <a
              href="https://x.com/AkkalAbhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none font-bold text-blue-300 underline underline-offset-4 transition-colors hover:text-blue-100"
            >
              @AkkalAbhishek
            </a>{" "}
            to know more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
