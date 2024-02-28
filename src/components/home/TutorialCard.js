import React from "react";
import parse from "html-react-parser";
import Link from "next/link";

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="p-6 bg-gray-600 rounded-2xl text-white w-[250px] h-[300px]">
      <div className="flex gap-2 items-center">
        <span className="bg-black rounded-full px-3 py-1 font-bold">T</span>
        <h3 className="font-semibold hover:text-gray-200 cursor-pointer">Tutorial Author</h3>
      </div>
      <Link href={`/tutorial/${tutorial.slug}`}>
        <h2 className="mt-4 font-semibold text-xl hover:text-gray-200 cursor-pointer">{tutorial.title}</h2>
      </Link>
      <h4 className="mt-4 text-gray-300">{parse(tutorial.content.slice(0, 100))}...</h4>
    </div>
  );
};

export default TutorialCard;
