import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { texts, type TextType } from "../../assets/texts";

type TextProps = {
  isStarted: boolean;
  setPage: Dispatch<SetStateAction<string>>;
};

const keyMessages = "I kinda miss you a bit and I wanna see you na";
const keyResponse = `I don't want to waste your time and I want to make it clear na that I don't want any serious thing right now.`;

const Messages = ({ isStarted, setPage }: TextProps) => {
  const [visibleMessages, setVisibleMessages] = useState<TextType[]>([]);
  const [index, setIndex] = useState(0);

  // Extracted function to reduce nesting
  const handleMessageTimeout = (currentIndex: number) => {
    const current = texts[currentIndex];

    const serveResponse = () =>
      setVisibleMessages((prev) => [
        ...prev,
        { text: keyResponse, time: current.time },
      ]);

    setVisibleMessages((prev) => [...prev, current]);
    if (current.text === keyMessages) {
      setTimeout(() => {
        serveResponse();
      }, 1500);
    }
    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isStarted) {
      setVisibleMessages([]);
      setIndex(0);
      return;
    }
    if (index >= texts.length) return;

    const timeout = setTimeout(() => {
      handleMessageTimeout(index);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index, isStarted]);

  if (!isStarted) return null;

  return (
    <div className="flex flex-col h-full w-full max-w-md gap-4 justify-end p-4 overflow-y-auto md:max-w-full">
      {visibleMessages.map((msg, i) => {
        if (msg.text === keyResponse) {
          return (
            <button
              key={msg.text + i}
              className="p-2 border w-fit gap-2 rounded-lg flex items-end justify-between self-end text-end"
              onClick={() => setPage("crushes")}
            >
              <span> {msg.time} </span>
              <span className="break-words max-w-48">{msg.text}</span>
            </button>
          );
        }
        return (
          <div
            key={msg.text + i}
            className="p-2 border w-fit gap-2 rounded-lg flex items-end justify-between"
          >
            <span className="break-words max-w-48">{msg.text}</span>
            <span> {msg.time} </span>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
