"use client";
import Image from "next/image";
import SongBox from "./SongBox";
import { MdAdd } from "react-icons/md";
import { CgArrowsExpandRight } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import RecentSong from "./RecentSong";
import { useState, useRef, useEffect } from "react";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Home() {
  // const [current, setCurrent] = useState(0);
  // const [duration, setDuration] = useState(0);
  const recentSong = [
    {
      id: 0,
      title: "Jhol",
      src: "/music/jhol.mp3",
      img: "/images/Jhol_image.webp",
    },
    {
      id: 1,
      title: "Thodi Si Daaru",
      src: "/music/ThodiSiDaaru.mp3",
      img: "/images/thodi-si-daaru.webp",
    },
    {
      id: 2,
      title: "For A Reason",
      src: "/music/ForAReason.mp3",
      img: "/images/ForAReason.jpg",
    },
    {
      id: 3,
      title: "Haseen",
      src: "/music/Haseen.mp3",
      img: "/images/Haseen.jpg",
    },
  ];
  const getStart = [
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/GuruRandhawaMix.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/SabatBatinMix.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/VikramSarkarMix.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/TalwiinderMix.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/ArijitSinghMix.jpg",
    },
  ];
  const artists = [
    { img: "/images/GuruRandhawa.jpg", name: "Guru Randhawa" },
    { img: "/images/ArijitSingh.jpg", name: "Arijit Singh" },
    { img: "/images/KaranAujla.jpg", name: "Karan Aujila" },
  ];
  const todayTits = [
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/PunjabiPop.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/TreandingNowIndia.jpg",
    },
  {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/BollywoodDanceMusic.jpg",
    },
  {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/TrendingValentineHits.jpg",
    },
  ]

  const recentyPlay = [{
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/IntoYou.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/Shkini.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/Perfect.jpg",
    },
    {
      dis: "Harrdy Sandhu, Karan Aujla and Avvy Sra",
      img: "/images/ApnaBanaLe.jpg",
    },
  ]

  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play / Pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Track change
  const loadSong = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = recentSong[index].src;
    audio.play();
    setCurrent(index);
    setIsPlaying(true);
  };

  // Progress update
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", () =>
      loadSong((current + 1) % recentSong.length)
    );

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, [current]);

  // Seek
  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col p-2 o">
      {/* Header */}
      {/* <div className="w-full h-14 p-2 shrink-0 "></div> */}
      {/* body */}
      <div className="flex-1 flex flex-col lg:flex-row gap-2 min-h-0">
        {/* left */}
        <div className="hidden lg:block w-[27%] h-full bg-zinc-box rounded-lg px-5">
          {/* Your Library */}
          <div className="h-16 pt-2 w-full flex items-center justify-between">
            <span className="font-bold">Your Library</span>
            <div className=" flex gap-2">
              <div className="bg-zinc-800 rounded-2xl px-3 py-1.8 flex gap-1 items-center cursor-pointer hover:bg-zinc-700">
                <MdAdd className="text-lg" />
                <span className="font-semibold text-sm">Create</span>
              </div>
              <div className="hover:bg-zinc-800 rounded-2xl p-2 cursor-pointer">
                <CgArrowsExpandRight />
              </div>
            </div>
          </div>
          {/* Artists */}
          <div className="h-10 w-full flex items-center justify-between">
            <span className="font-semibold text-sm text-zinc-300 py-1.5 px-3 bg-zinc-800 rounded-2xl">
              Artists
            </span>
          </div>
          {/* Search area */}
          <div className="h-16 pt-2 w-full flex items-center justify-between">
            <span className="text-xl p-1.5 cursor-pointer hover:bg-zinc-800 rounded-2xl">
              <IoIosSearch />
            </span>
            <div className=" flex gap-2">
              <div className=" rounded-2xl flex gap-1 items-center cursor-pointer text-zinc-400 hover:text-zinc-300">
                <span className="font-semibold text-sm">Recents</span>
                <AiOutlineBars />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="w-full h-16 hover:bg-zinc-800 rounded-md flex items-center px-1 gap-2 cursor-pointer"
              >
                <div className="h-13 w-13 rounded-full bg-zinc-700 relative ">
                  <Image
                    className="rounded-full"
                    fill
                    src={artist.img}
                    alt="img"
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold ">{artist.name}</span>
                  <span className="text-sm text-zinc-400">Artist</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* center */}
        <div className="w-full mb-55 lg:mb-0  lg:w-[46%] min-h-0 rounded-lg bg-zinc-900 overflow-y-auto no-scrollbar">
          <div className="h- w-full px-5 rounded-t-lg bg-linear-to-b from-green-800/30 to-zinc-900 lg:px-10 ">
            {/* navbar */}
            <div className="h-16 pt-2 w-full flex items-center">
              <div className="h-10">
                <button className="py-1 px-3 bg-white rounded-2xl text-black mr-3">
                  <span className="text-sm">All</span>
                </button>
                <button className="py-1 px-3 bg-zinc-400/25 rounded-2xl text-white mr-3">
                  <span className="text-sm">Music</span>
                </button>
                <button className="py-1 px-3 bg-zinc-400/25 rounded-2xl text-white">
                  <span className="text-sm">Podcasts</span>
                </button>
              </div>
            </div>
            {/* resentSong */}
            <div className="pt-1 flex flex-col sm:flex-row flex-wrap gap-2 mb-4">
              {recentSong.map((song, index) => (
                <RecentSong
                  key={index}
                  song={song}
                  isPlaying={isPlaying}
                  audioRef={audioRef}
                  loadSong={loadSong}
                  current={current}
                  togglePlay={togglePlay}
                />
              ))}
            </div>
          </div>
          {/* to get you started */}
          <div className="px-4 sm:px-6 lg:px-10">
            {/* heading */}
            <div className="h-14 w-full flex flex-col justify-end ">
              <div className="mb-2 flex justify-between items-end cursor-pointer">
                <div className="font-bold text-xl lg:text-2xl">To get you started</div>
                <div className="text-sm font-bold text-zinc-400 cursor-pointer">
                  Show all
                </div>
              </div>
            </div>
            {/* card */}
            <div className=" overflow-x-auto no-scrollbar scrollbar-hide">
              <div className="flex shrink-0">
                {getStart.map((mix, index) => (
                  <SongBox key={index} className="shrink-0" mix={mix} />
                ))}
              </div>
            </div>
            {/* today's biggest hits */}

            {/* heading */}
            <div className="h-14 mt-4 w-full flex flex-col justify-end ">
              <div className="mb-2 flex justify-between items-end cursor-pointer">
                <div className="font-bold text-xl lg:text-2xl">Today's biggest hits</div>
                <div className="text-sm font-bold text-zinc-400 cursor-pointer">
                  Show all
                </div>
              </div>
            </div>
            {/* card */}
            <div className=" overflow-x-auto no-scrollbar scrollbar-hide">
              <div className="flex shrink-0">
                {todayTits.map((mix, index) => (
                  <SongBox key={index} className="shrink-0" mix={mix} />
                ))}
              </div>
            </div>
            {/* Recently played */}
            <div className="h-14 mt-4 w-full flex flex-col justify-end ">
              <div className="mb-2 flex justify-between items-end cursor-pointer">
                <div className="font-bold text-xl lg:text-2xl">Recently played</div>
                <div className="text-sm font-bold text-zinc-400 cursor-pointer">
                  Show all
                </div>
              </div>
            </div>
            {/* card */}
            <div className=" overflow-x-auto no-scrollbar scrollbar-hide">
              <div className="flex shrink-0">
                {recentyPlay.map((mix, index) => (
                  <SongBox key={index} className="shrink-0" mix={mix} />
                ))}
              </div>
            </div>
            <div className="h-40 w-full border-t border-zinc-700 flex justify-center items-center flex-col" >
              <div className="font-bold text-zinc-300" >
              Thanks for listening
              </div>
              <div className="text-xs text-zinc-400" >Made by Aman 🤍</div>
              </div>
          </div>
        </div>
        {/* right */}
        <div className=" w-full lg:w-[27%] bg-zinc-box rounded-lg px-4 lg:px-5 min-h-0 overflow-y-auto fixed lg:static bottom-0 left-0 right-0 z-50">
          <div className="font-bold mt-5 ">{recentSong[current].title}</div>
          <div className="mt-5 w-full h-[60%] relative bg-zinc-800 rounded-lg">
            <Image
              fill
              src={recentSong[current].img || "/image"}
              alt="img"
              className="rounded-lg"
            ></Image>
          </div>
          <div className="w-full h-40 bg-linear-to-b from-pink-800/30 to-zinc-900 rounded-lg mt-2 p-5 gap-2">
            <div className="w-full flex justify-center gap-2 mb-4 ">
              <div className="w-10 h-10 rounded-full bg-zinc-200 relative">
                {" "}
                <Image
                  className="rounded-full"
                  fill
                  src={"/images/KaranAujla.jpg"}
                  alt="img"
                ></Image>
              </div>

              <div>
                <div className="font-bold text-sm">Karan Aujila</div>
                <div className="text-xs text-zinc-300">Artist</div>
              </div>
            </div>
            <div className="w-full ">
              {/* controls */}
              <div className="flex justify-center gap-10 sm:gap-7 text-zinc-400 text-2xl sm:text-xl mb-3">
                <button
                  onClick={() =>
                    loadSong(
                      (current - 1 + recentSong.length) % recentSong.length
                    )
                  }
                >
                  ⏮
                </button>
                <button className="text-zinc-100 " onClick={togglePlay}>
                  {isPlaying ? "⏸" : "▶"}
                </button>
                <button
                  onClick={() => loadSong((current + 1) % recentSong.length)}
                >
                  ⏭
                </button>
              </div>
              {/* process */}
              <div className="w-full flex justify-center text-xs gap-2 items-center text-zinc-300">
                {Math.floor(progress / 60)}:{Math.floor(progress % 60)}
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  value={progress}
                  onChange={(e) => seek(Number(e.target.value))}
                  className="w-full h-0.5"
                />
                {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
              </div>
            </div>
          </div>
          {/* <div className="w-full h-40 mb-3 bg-zinc-800 rounded-lg mt-1"></div> */}
        </div>
      </div>
    </div>
  );
}
