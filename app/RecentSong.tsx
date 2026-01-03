"use client";
import { useState, useRef, SetStateAction, Dispatch, RefObject } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { IoIosPause } from "react-icons/io";
import Image from "next/image";
import { title } from "process";

interface song {
  img: string;
  title: string;
  id: number;
}

const RecentSong = ({
  song,
  isPlaying,
  audioRef,
  loadSong,
  current,
  togglePlay,
}: {
  song: song;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement | null>;
  loadSong: Function;
  current: number;
  togglePlay:Function;
}) => {
  //   const audioRef = useRef<HTMLAudioElement>(null);

  //   const [playing, setPlaying] = useState(false);

  //   const playSong = (index: number) => {
  //     const audio = audioRef.current;
  //     if (!audio) return;

  //     audio.src = playlist[index].src;
  //     audio.play();
  //     setCurrent(index);
  //     setTimeout(() => {

  //         setDuration(audio.duration)
  //         console.log(audio.duration)
  //     }, 1000);
  //     setPlaying(true);
  //   };
  //   const pauseSong = (index: number) => {
  //     const audio = audioRef.current;
  //     if (!audio) return;

  //     audio.src = playlist[index].src;
  //     audio.pause();
  //     setCurrent(index);
  //     setPlaying(false);
  //   };

  return (
    <div
      className="
      w-full sm:w-[49%]
      h-14 sm:h-12
      bg-zinc-400/25
      rounded-md
      flex justify-between items-center
      cursor-pointer
      pr-2
      group
    "
    >
      <audio ref={audioRef} preload="metadata" />

      {/* Left */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-14 w-14 sm:h-12 sm:w-12 shrink-0 relative rounded-md overflow-hidden">
          <Image fill src={song.img} alt={song.title} />
        </div>

        <span className="font-semibold text-sm truncate">{song.title}</span>
      </div>

      {/* Play / Pause */}
      {current === song.id ? (
        <button
          className="
    w-9 h-9
    rounded-full
    bg-green-500 text-black
    flex justify-center items-center
    sm:opacity-0 sm:group-hover:opacity-100
    transition
    "
          onClick={() => togglePlay()}
        >
          {isPlaying ? (
            <IoIosPause className="text-xl" />
          ) : (
            <BsFillTriangleFill className="rotate-90 text-sm" />
          )}
        </button>
      ) : (
        <button
          className="
    w-9 h-9
    rounded-full
    bg-green-500 text-black
    flex justify-center items-center
    sm:opacity-0 sm:group-hover:opacity-100
    transition
    "
          onClick={() => loadSong(song.id)}
        >
          <BsFillTriangleFill className="rotate-90 text-sm" />
        </button>
      )}
    </div>
  );
};

export default RecentSong;
