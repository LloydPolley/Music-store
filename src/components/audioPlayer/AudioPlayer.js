import React, { useEffect, useState, useRef } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
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

  const refFillBar = useRef(null);

  useEffect(() => {
    // console.log(props.trackPlaying, "pp");
    if (props.trackPlaying.length === undefined) {
      audioPlayer.src = props.trackPlaying.audio;
      setArtist(props.trackPlaying.artist);
      setTrack(props.trackPlaying.title);
      playAudioToggle();
      seekBarHandler();
    }
  }, [props.trackPlaying]);

  const fillTime = {
    width: `${currentTime}%`
  };

  const seekBarHandler = () => {
    let position = audioPlayer.currentTime;
    audioPlayer.addEventListener("timeupdate", () => {
      console.log((audioPlayer.currentTime / audioPlayer.duration) * 100);
      setCurrentTime(audioPlayer.currentTime);
    });
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
  return (
    <div className="audioPlayer loaded">
      <div className="audioPlayerLayout">
        <div className="audioPlayerLayout__info">
          <p>{trackName}</p>
          <p>{artistName}</p>
        </div>
        <div className="audioPlayerLayout__progress">
          <div id="seekBar">
            <div style={fillTime} ref={refFillBar} className="fill"></div>
          </div>
        </div>
        <div className="audioPlayerLayout__controls">
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
