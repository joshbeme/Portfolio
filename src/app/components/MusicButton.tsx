"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Howl } from "howler";

type MusicButtonProps = {
  setSite?: (site: string) => void;
  site?: string;
};

const pickRandom = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const SONGS = ["/catchy.mp3", "/catchy2.mp3", "/catchy3.mp3"];
const sound = new Howl({
  src: [pickRandom(SONGS)],
  volume: 0.15,
});

const MusicButton = ({ setSite, site }: MusicButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const song = useRef<number | null>(null);

  const playSound = () => {
    if (!song.current) song.current = sound.play();
    else sound.play(song.current);
  };

  useEffect(() => {
    if (isPlaying) playSound();
    else sound.pause();
  }, [isPlaying]);

  const onClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={onClick}
      className="nes-btn text-white text-xl py-2 px-2 fixed top-0 left-0 m-4 z-50"
    >
      <span className="inline-block text-black m-2">
        {isPlaying ? (
          <FaPause
            className="w-6 h-6"
            style={{ imageRendering: "pixelated" }}
          />
        ) : (
          <FaPlay className="w-6 h-6" style={{ imageRendering: "pixelated" }} />
        )}
      </span>
    </button>
  );
};

export default MusicButton;
