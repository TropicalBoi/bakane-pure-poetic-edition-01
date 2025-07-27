import { useState, type Dispatch, type SetStateAction } from "react";
import "./index.css";
import Messages from "../messages";

type HomeProps = {
  setPage: Dispatch<SetStateAction<string>>;
};

const Home = ({ setPage }: HomeProps) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="flex flex-col h-full gap-4 items-center">
      <div className={`main-block ${isStarted ? "fit" : "full"}`}>
        <h1 className={`heading ${isStarted ? "small" : "large"}`}>
          ♥ BAKA-NE ♥
        </h1>
        <p className={`subtitle ${isStarted ? "small" : ""}`}>
          A dating simulator of a one-sided lover
        </p>
        <p className="subtitle">✨𝓹𝓾𝓻𝓮 𝓹𝓸𝓮𝓽𝓲𝓬 𝓮𝓭𝓲𝓽𝓲𝓸𝓷✨</p>
        <button
          onClick={() => {
            if (!isStarted) setIsStarted(true);
            else setPage("about");
          }}
        >
          {isStarted ? "about" : "let's start!"}
        </button>
      </div>

      <div className="w-full px-0 lg:px-40">
        <Messages isStarted={isStarted} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
