"use client";
import { useState, useEffect } from "react";
import Pagination from "@/components/common/Pagination";
import TutorialList from "@/components/tutorial/TutorialList";
import axios from "axios";

export default function Page() {
  const [tutorialData, setTutorialData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllTutorials = async () => {
    try {
      const response = await axios.get("/api/get-all-tutorial-subtopics");
      setTutorialData(response.data);
    } catch (error) {
      console.error("Error fetching all tutorials:", error);
    }
  };

  useEffect(() => {
    getAllTutorials();
  }, []);

  const totalTutorials = tutorialData.length;
  const tutorialsPerPage = 6;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * tutorialsPerPage;
  const endIndex = startIndex + tutorialsPerPage;

  // Slice the data to display only the items for the current page
  const displayedData = tutorialData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalTutorials]);

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  return (
    <>
      <TutorialList tutorialData={displayedData} />
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalBlogs={totalTutorials}
        blogsPerPage={tutorialsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </>
  );
}
