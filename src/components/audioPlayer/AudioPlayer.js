import React, {useEffect} from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import song from '../audioPlayer/Monolink-Swallow-(Tale Of Us Remix).mp3'

const AudioPlayer = props => {
  const track = new Audio();

  useEffect(()=>{
    track.src = props.musicFile;
  });
  
  const play = () => {
    track.play();
  };
  const pause = () => {
    track.pause()
  };

  return (
    <div className="audioPlayer loaded">
      <div className="audioPlayerLayout">
        <div className="audioPlayerLayout__info">
          <p>Track Name</p>
          <p>Artist</p>
        </div>
        <div className="audioPlayerLayout__progress">
          <div id="seekBar">
            <div className="fill"></div>
          </div>
          <audio controls><source src={song}></source></audio>
        </div>
        <div className="audioPlayerLayout__controls">
          <FiPlay onClick={play} />
          <FiPause onClick={pause}/>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
