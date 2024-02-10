import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import space from "./assets/sound.mp3";
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im";
const App = () => {
  const [play, { stop }] = useSound(space, { volume: 0.2 });
  const [muted, setMuted] = useState<boolean>(
    JSON.parse(localStorage.getItem("muted") || "false") || false
  );

  const handleMute = () => {
    setMuted((prevMuted) => {
      localStorage.setItem("muted", JSON.stringify(!prevMuted));
      return !prevMuted;
    });
  };

  useEffect(() => {
    if (!muted) {
      play();
    } else {
      stop();
    }
  }, [muted, play, stop]);

  return (
    <BrowserRouter>
      {" "}
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="z-0">
          <Contact />
        </div>
        <button
          onClick={() => {
            handleMute();
          }}
          className="fixed bottom-4 right-2 z-50 w-16 h-16"
        >
          {muted ? (
            <ImVolumeMute2 className="w-7 h-7 md:w-10 md:h-10 text-white" />
          ) : (
            <ImVolumeMute className="md:w-10 md:h-10 w-7 h-7 text-white" />
          )}
        </button>
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
