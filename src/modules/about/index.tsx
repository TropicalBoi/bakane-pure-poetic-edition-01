import { useState, type Dispatch, type SetStateAction } from "react";
import "./index.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";

import { TypeAnimation } from "react-type-animation";

type AboutProps = {
  setPage: Dispatch<SetStateAction<string>>;
};

const aboutText1 = `We thought we came to play a game.
Turns out, we’re the ones being played.
`;

const aboutText2 = `BAKA-NE is a dating simulator where the only thing you can truly romance is your own expectation. You choose, you type, you wait — and maybe, if you're lucky, you’ll be ignored with extra tenderness.`;

const aboutText3 = `Inspired by the endless scroll of “seen” messages and the quiet drama of unrequited love, this work invites players to flirt with silence, to confess into a void dressed up like a chat box. It’s not about winning hearts — it’s about staying just long enough to realize you already gave yours away.`;

const aboutText4 = `
There are choices, of course.
But what are we choosing, really?`;

const aboutText5 = `✨𝓹𝓾𝓻𝓮 𝓹𝓸𝓮𝓽𝓲𝓬 𝓮𝓭𝓲𝓽𝓲𝓸𝓷✨`;

const aboutText6 = `— a collection of unread love letters from players who never got a reply.

This web-based edition of BAKA-NE gathers every message sent by players from the physical edition who tried, hoped, waited — and leaves them on display like petals in a digital shrine.

Each message appears one by one, mimicking the rhythm of a real chat. But there’s no one typing back. No reply bubble. Just the voices of one-sided lovers, layered endlessly across time.

It’s no longer a game. It’s a loop.
A shared soliloquy. A collective heartbreak.
A gallery of what we say when no one’s listening.

And maybe that’s the most honest version of love we’ve ever known.`;

const About = ({ setPage }: AboutProps) => {
  const [step, setStep] = useState(1);

  const handleAddStep = () => {
    if (step < 7) {
      setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full gap-4 items-center">
      <div className={`main-block fit`}>
        <h1 className={`heading small`}>♥ BAKA-NE ♥</h1>
        <p className={`subtitle small`}>
          A dating simulator of a one-sided lover
        </p>
        <p className="subtitle">✨𝓹𝓾𝓻𝓮 𝓹𝓸𝓮𝓽𝓲𝓬 𝓮𝓭𝓲𝓽𝓲𝓸𝓷✨</p>
        <button onClick={() => setPage("")}>{`< Back to Home`}</button>
      </div>
      <div className="w-full px-10 lg:px-40 flex flex-col items-center gap-4 pb-10">
        <TypeAnimation
          sequence={[aboutText1, handleAddStep]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "18px", display: "inline-block" }}
          repeat={0}
          omitDeletionAnimation
          cursor={false}
        />
        {step >= 2 && (
          <TypeAnimation
            sequence={[aboutText2, handleAddStep]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={0}
            omitDeletionAnimation
            cursor={false}
          />
        )}
        {step >= 3 && (
          <TypeAnimation
            sequence={[aboutText3, handleAddStep]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={0}
            omitDeletionAnimation
            cursor={false}
          />
        )}
        {step >= 4 && (
          <TypeAnimation
            sequence={[aboutText4, handleAddStep]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={0}
            omitDeletionAnimation
            cursor={false}
          />
        )}
        {step >= 5 && (
          <TypeAnimation
            sequence={[aboutText5, handleAddStep]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={0}
            omitDeletionAnimation
            cursor={false}
          />
        )}
        {step >= 6 && (
          <TypeAnimation
            sequence={[aboutText6, handleAddStep]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={0}
            omitDeletionAnimation
            cursor={false}
          />
        )}
        {step >= 7 && (
          <div className="flex flex-col gap-4 items-center p-4">
            <img src={img1} alt="img1" className="w-full h-auto rounded-xl" />
            <img src={img2} alt="img2" className="w-full h-auto rounded-xl" />
            <img src={img3} alt="img3" className="w-full h-auto rounded-xl" />
            <img src={img4} alt="img4" className="w-full h-auto rounded-xl" />
            <img src={img5} alt="img5" className="w-full h-auto rounded-xl" />
            <img src={img6} alt="img6" className="w-full h-auto rounded-xl" />
            <img src={img7} alt="img7" className="w-full h-auto rounded-xl" />
            <a
              href="https://www.instagram.com/t.ropicalboi/"
              target="_blank"
              className="hover:underline text-center"
            >
              About the artist: @t.ropicalboi
            </a>
            <button onClick={() => setPage("")}>{`< Back to Home`}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
