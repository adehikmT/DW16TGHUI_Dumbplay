import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "./playMusic.css";

const MusicPlayer = (props) => {
  const { musicAll, playIndex, setPlayIndex } = props;
  const playlist = musicAll.map((music) => ({
    name: music.title,
    singer: music.artis,
    cover: music.cover,
    musicSrc: music.musicSrc,
  }));

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      <ReactJkMusicPlayer
        mode="full"
        audioLists={playlist}
        defaultPlayIndex={0}
        autoPlay={false}
        showDownload={false}
        showThemeSwitch={false}
        toggleMode={false}
        responsive={false}
        glassBg={true}
        playIndex={playIndex}
        onAudioPlay={(audioInfo) => {
          if (playIndex === audioInfo.playIndex) {
            return;
          }
          console.log(audioInfo)
          setPlayIndex(audioInfo.playIndex);
        }}
      />
      ,
    </div>
  );
};

export default MusicPlayer;
