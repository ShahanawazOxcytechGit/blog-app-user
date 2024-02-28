"use client";
import parse from "html-react-parser";

export default function Tutorial({ tutorial }) {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-gray-800 text-2xl font-bold">{tutorial.title}</h2>

          <p className="text-justify text-gray-600 text-base font-normal leading-8">{parse(`${tutorial.content}`)}</p>
        </div>
      </div>
    </div>
  );
}
