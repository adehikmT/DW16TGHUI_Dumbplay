import React from "react";

import img12 from "../../public/assets/12.svg";

import PlayMusic from "./Play";

const Index = () => {
  const musicAll = [
    {
      title: "End Of The ..",
      artis: "Backstreet Boys",
      cover: img12,
      musicSrc:
        "https://p.scdn.co/mp3-preview/9af47d1865d4022ba07cbf931ffb7ffa47dc4dd6?cid=18fc7b00a64d447393f6ee0dd98a70be",
    },
    {
      title: "Circles",
      artis: "Post Malone",
      cover: img12,
      musicSrc:
        "https://p.scdn.co/mp3-preview/9af47d1865d4022ba07cbf931ffb7ffa47dc4dd6?cid=18fc7b00a64d447393f6ee0dd98a70be",
    },
    {
        title: "Logic",
        artis: "Keanu Reeces",
        cover: img12,
        musicSrc:
          "https://p.scdn.co/mp3-preview/9af47d1865d4022ba07cbf931ffb7ffa47dc4dd6?cid=18fc7b00a64d447393f6ee0dd98a70be",
      },
      {
        title: "Godzila",
        artis: "Eminem",
        cover: img12,
        musicSrc:
          "https://p.scdn.co/mp3-preview/9af47d1865d4022ba07cbf931ffb7ffa47dc4dd6?cid=18fc7b00a64d447393f6ee0dd98a70be",
      }
  ];

  return <PlayMusic musicAll={musicAll} playIndex={1} setPlayIndex={2} />;
};

export default Index;

// https://p.scdn.co/mp3-preview/9af47d1865d4022ba07cbf931ffb7ffa47dc4dd6?cid=18fc7b00a64d447393f6ee0dd98a70be
