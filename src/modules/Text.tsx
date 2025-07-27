import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type TextProps = {
  crush: string;
  setPage: Dispatch<SetStateAction<string>>;
};

type TextItem = {
  text: string;
  time: string;
};

const TextInput = ({ crush, setPage }: TextProps) => {
  const [texts, setTexts] = useState<TextItem[]>([]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const createTextItem = (text: string): TextItem => {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return { text, time };
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [texts]);

  const renderTexts = () => {
    return (
      <div
        ref={scrollRef}
        className="flex flex-col gap-2 h-full relative w-full overflow-y-scroll border-2 border-gray-300 rounded-lg p-2 items-end"
      >
        {texts.map(({ text, time }) => (
          <div
            key={text + time}
            className="p-2 border w-fit gap-2 rounded-lg flex items-end justify-between"
          >
            <span> {time} </span>
            <span className="break-words max-w-48">{text}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center ">
      <div className="min-h-96 w-96 flex flex-col gap-4 items-center justify-between p-4 border-2 border-gray-300 rounded-lg">
        <h1 className="font-sixtyfour text-xl  ">♥ {crush} ♥</h1>
        <div className="w-full h-64 overflow-y-auto">{renderTexts()}</div>

        <input
          className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={`Text your crush, ${crush}...`}
          type="text"
          onKeyDown={async (e) => {
            if (e.key === "Escape") {
              e.preventDefault();

              setPage("");
              return;
            }
            if (e.key === "Enter") {
              const input = e.currentTarget as HTMLInputElement;
              const message = input.value.trim();
              if (message) {
                const newText = createTextItem(input.value);
                setTexts((prev) => [...prev, newText]);

                input.value = "";

                try {
                  console.log(message);
                } catch (err) {
                  console.error("Printer error:", err);
                }
              }
            }
          }}
          autoFocus
          tabIndex={0}
        />
      </div>

      <div className="flex flex-col gap-4">
        <button className="underline" onClick={() => setPage("")} type="button">
          {`< Back to Home`}
        </button>
      </div>
    </div>
  );
};
export default TextInput;
