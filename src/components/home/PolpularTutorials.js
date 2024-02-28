"use client";
import React, { useState, useEffect } from "react";
import TutorialCard from "./TutorialCard";
import axios from "axios";

const PopularTutorials = () => {
  const [tutorialData, setTutorialData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetTutorials = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/get-all-tutorial-subtopics");
      setTutorialData(response.data);
    } catch (error) {
      console.error("Tutorials Get operation error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetTutorials();
  }, []);

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

        {loading ? (
          <div className="p-6 bg-gray-600 rounded-2xl text-center w-[250px] h-[300px]">
            <p className="text-white text-4xl">Loading...</p>
          </div>
        ) : (
          tutorialData.map((tutorial) => <TutorialCard key={tutorial.id} tutorial={tutorial} />)
        )}
      </div>
    </div>
  );
};

export default PopularTutorials;
