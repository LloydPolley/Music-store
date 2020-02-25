import React, { useEffect, useState, useRef } from "react";
import { FiPlay, FiPause, FiSkipBack } from "react-icons/fi";
import { connect } from "react-redux";

let audioPlayer = new Audio();
// audioPlayer.addEventListener("timeupdate", () => {
//   console.log(audioPlayer.currentTime);
// });

const AudioPlayer = props => {
  const [playing, setPlaying] = useState(false);
  const [trackName, setTrack] = useState("Select");
  const [artistName, setArtist] = useState("Track");
  const [currentTime, setCurrentTime] = useState(0);

  const [seek, setSeek] = useState(0);
  const [volume, setVolume] = useState(100);

  const refFillBar = useRef(null);

  useEffect(() => {
    // console.log(props.trackPlaying, "pp");
    if (props.trackPlaying.length === undefined) {
      audioPlayer.src = props.trackPlaying.audio;
      setArtist(props.trackPlaying.artist);
      setTrack(props.trackPlaying.title);
      playAudioToggle();
      // seekBarHandler();
    }
  }, [props.trackPlaying]);

  const fillTime = {
    width: `${currentTime}%`
  };

 

  const playAudioToggle = () => {
    if (audioPlayer.paused) {
      setPlaying(true);
      audioPlayer.play().then(() => {
        //success
      });
    } else {
      setPlaying(false);
      audioPlayer.pause();
    }
  };
  const restartHandle = () => {
    audioPlayer.currentTime = 0;
    audioPlayer.volume = 0.5;
  };




  const seekTouchHandler = e => {
    setSeek(e.target.value);
    audioPlayer.currentTime = audioPlayer.duration * (e.target.value / 100);
  };
   const seekBarTimeUpdateHandler = () => {
    let position = audioPlayer.currentTime;
    audioPlayer.addEventListener("timeupdate", () => {
      // console.log((audioPlayer.currentTime / audioPlayer.duration) * 100);
      setCurrentTime(audioPlayer.currentTime);
      // console.log(audioPlayer.duration / 100)
    });
  };

 
  //Volume handler slider
  const volumeHandler = e => {
    if (e.target.value / 100 === 0.01) {
      setVolume(e.target.value);
      audioPlayer.volume = 0;
    } else {
      setVolume(e.target.value);
      audioPlayer.volume = volume / 100;
    }
  };

  return (
    <div className="audioPlayer loaded">
      <div className="audioPlayerLayout">
        <div className="audioPlayerLayout__info">
          <p>{trackName}</p>
          <p>{artistName}</p>
        </div>
        <div className="audioPlayerLayout__progress">
          <input
            type="range"
            min="0"
            max="100"
            onChange={seekTouchHandler}
            value={seek}
            step="1"
            className="slider"
            id="seekSlider"
          />
        </div>
        <div className="audioPlayerLayout__controls">
          <input
            type="range"
            min="0"
            max="100"
            onChange={volumeHandler}
            value={volume}
            step="1"
            className="slider"
            id="volumeSlider"
          />
          <FiSkipBack onClick={restartHandle} />
          {!playing ? (
            <FiPlay onClick={playAudioToggle} />
          ) : (
            <FiPause onClick={playAudioToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trackPlaying: state.audioPlayer
  };
};

export default connect(mapStateToProps)(AudioPlayer);
