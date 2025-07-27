import { useRef, useState, type Dispatch, type SetStateAction } from "react";

type CrushProps = {
  setPage: Dispatch<SetStateAction<string>>;
  setCrush: Dispatch<SetStateAction<string>>;
};

const mbtiOptions = [
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
];

const astrologyOptions = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const CrushOptions = ({ setPage, setCrush }: CrushProps) => {
  const [pickedType, setPickedType] = useState<string>();

  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault(); // Stop F1 from doing its default (like opening help)

      const focusables = Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex >= 0);

      const index = focusables.indexOf(e.currentTarget);
      const next = focusables[index + 1] || focusables[0];
      next.focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault(); // Stop F1 from doing its default (like opening help)

      const focusables = Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex >= 0);

      const index = focusables.indexOf(e.currentTarget);
      const next = focusables[index - 1] || focusables[0];
      next.focus();
    }
  };

  const renderOptions = (options: string[], title: string) => {
    return (
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg font-semibold">{title}:</h3>

        <ul className="grid grid-cols-3 gap-2">
          {options.map((option) => (
            <li key={option} className="list-none">
              <button
                className="focus:underline hover:underline"
                onKeyDown={handleKeyDown}
                onClick={() => {
                  setCrush(option);
                  setPage("text");
                }}
              >
                - {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className="w-full h-screen flex flex-col gap-4 items-center justify-center "
      ref={containerRef}
    >
      <h1 className="font-sixtyfour text-2xl ">♥ BAKA-NE ♥</h1>
      <p className="text-base">
        You found the secret entrance!
        <br />
        Enjoy the flirting simulator ♥
      </p>

      <h2 className="text-xl font-semibold">Choose your crush by:</h2>
      <div className="flex flex-col gap-4">
        {!pickedType && (
          <div className="flex gap-8 items-center">
            <button
              className="rounded-lg p-2 border"
              onClick={() => setPickedType("mbti")}
            >
              MBTI
            </button>
            <button
              className="rounded-lg p-2 border"
              onClick={() => setPickedType("astrology")}
            >
              Astrology Sign
            </button>
          </div>
        )}
        {pickedType && (
          <button
            className="focus:underline hover:underline"
            onKeyDown={handleKeyDown}
            onClick={() => setPage("")}
          >
            {`< Change crush options`}
          </button>
        )}
        {pickedType === "mbti" && renderOptions(mbtiOptions, "MBTI")}
        {pickedType === "astrology" &&
          renderOptions(astrologyOptions, "Astrology Sign")}

        <button
          className="underline"
          onKeyDown={handleKeyDown}
          onClick={() => setPage("")}
        >
          {`< Back to Home`}
        </button>
      </div>
    </div>
  );
};

export default CrushOptions;
