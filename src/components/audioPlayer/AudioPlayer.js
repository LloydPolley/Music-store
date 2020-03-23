import React, { useEffect, useState, useRef } from "react";
import { FiPlay, FiPause, FiSkipBack } from "react-icons/fi";
import { connect } from "react-redux";

let audioPlayer = new Audio();
audioPlayer.src = 'https://firebasestorage.googleapis.com/v0/b/music-store-project-61ddd.appspot.com/o/artists%2Faudio%2FME-Garden.mp3?alt=media&token=660c4e7a-ada0-469e-a293-dbc60e32e530';
console.log(audioPlayer)
// audioPlayer.play();
// audioPlayer.addEventListener("timeupdate", () => {
//   console.log(audioPlayer.currentTime);
// });

const AudioPlayer = props => {
  const [playing, setPlaying] = useState(false);
  const [trackName, setTrack] = useState("Garden");
  const [artistName, setArtist] = useState("&me");

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
      seekBarTimeUpdate();
      console.log(props.trackPlaying.audio);
    }
  }, [props.trackPlaying]);

  useEffect(()=>{
    console.log('playing: ', audioPlayer.paused)
  })


  // const enableAudioIos = () => {
  //   // audioPlayer.src = 'https://firebasestorage.googleapis.com/v0/b/music-store-project-61ddd.appspot.com/o/artists%2Faudio%2FME-Garden.mp3?alt=media&token=660c4e7a-ada0-469e-a293-dbc60e32e530';
  //   audioPlayer.play().then(()=>{
      
  //   });
  // }

  const playAudioToggle = () => {
    // console.log(audioPlayer.src);
    if (audioPlayer.src !== "") {
      if (audioPlayer.paused) {
        setPlaying(true);
        audioPlayer.play().then(() => {
          //success
        });
      } else {
        setPlaying(false);
        audioPlayer.pause();
      }
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
  const seekBarTimeUpdate = () => {
    let position = audioPlayer.currentTime;
    audioPlayer.addEventListener("timeupdate", () => {
      setSeek((audioPlayer.currentTime / audioPlayer.duration) * 100);
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
            step="0.01"
            className="slider"
            id="seekBar"
          />
        </div>
        <div className="audioPlayerLayout__controls">
          <FiSkipBack onClick={restartHandle} />
          {!playing ? (
            <FiPlay onClick={playAudioToggle} />
          ) : (
            <FiPause onClick={playAudioToggle} />
          )}
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
          {/* <input type="radio" className="iosAudioToggle" name="gender" value="male" onChange={enableAudioIos}/> */}
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
