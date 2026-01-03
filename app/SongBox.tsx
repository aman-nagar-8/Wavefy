import React from "react";
import Image from "next/image";

interface mix{
  dis:string,
  img:string
}

const SongBox = ({ className, mix }: { className?: string; mix: mix }) => {
  return (
    <div
      className={`
        shrink-0
        w-36 sm:w-40 md:w-44
        p-3
        rounded-md
        hover:bg-zinc-800
        cursor-pointer
        flex flex-col gap-2
        ${className}
      `}
    >
      <div className="w-full aspect-square relative rounded-md overflow-hidden">
        <Image fill src={mix.img} alt="mix" />
      </div>

      <div className="text-xs sm:text-sm font-semibold text-zinc-400 line-clamp-2">
        {mix.dis}
      </div>
    </div>
  );
};

export default SongBox;
