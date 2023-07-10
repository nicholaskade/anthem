import ussr from "./assets/ussr.svg";
import stopButton from "./assets/stop-button.svg";
import playButton from "./assets/play-button.svg";
import pauseButton from "./assets/pause-button.svg";

import "./App.css";
import useSound from "use-sound";
import anthem from "./ussr.mp3";
import { useEffect, useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);

  const [play, { pause, stop }] = useSound(anthem);

  function handleClick() {
    if (playing === true) {
      pause();
      setPlaying(false);
    } else {
      play();
      setPlaying(true);
    };
  };

  function handleStop() {
    if (playing === true) {
      stop();
      setPlaying(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="icon-container">
          <img src={ussr} className="App-icon" alt="ussr" />
        </div>
      </header>
      <div id="button-container">
        {playing ? (
          <span
            role="button"
            aria-label="app-pause-button"
            aria-pressed="false"
          >
            <img
              className="button"
              src={pauseButton}
              onClick={() => handleClick()}
            />
          </span>
        ) : (
          <span role="button" aria-label="app-play-button" aria-pressed="false">
            <img
              className="button"
              src={playButton}
              onClick={() => handleClick()}
            />
          </span>
        )}

        <span role="button" aria-label="app-stop-button" aria-pressed="false">
          <img
            className="button"
            src={stopButton}
            onClick={() => handleStop()}
          />
        </span>
      </div>
    </div>
  );
};

export default App;
