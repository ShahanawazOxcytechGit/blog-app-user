import React from "react";
import TutorialCard from "./TutorialCard";

const PopularTutorials = () => {
  return (
    <div>
      <div className="flex justify-center md:justify-between flex-wrap gap-5">
        <div className="p-6 bg-gray-800 border-[5px] border-rose-500 rounded-md w-[250px] h-[300px]">
          <div className="flex flex-col gap-2 text-white font-bold text-2xl md:text-4xl">
            <span>Popular</span>
            <span>Tutorials</span>
            <span>of</span>
            <span>the</span>
            <span>Month</span>
          </div>
        </div>
        <TutorialCard />
        <TutorialCard />
        <TutorialCard />
      </div>
      <div className="mt-5 flex justify-center md:justify-between flex-wrap gap-5">
        <TutorialCard />
        <TutorialCard />
        <TutorialCard />
        <TutorialCard />
      </div>
    </div>
  );
};

export default PopularTutorials;
