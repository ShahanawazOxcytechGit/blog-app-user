"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const PopularBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  const handleGetBlogs = async () => {
    try {
      const response = await axios.get("/api/get-all-blogs");
      setBlogsData(response.data);
    } catch (error) {
      console.error("Blogs Get operation error", error);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center md:justify-between flex-wrap gap-5">
        <div className="p-6 bg-gray-800 border-[5px] border-rose-500 rounded-md w-[250px] h-[300px]">
          <div className="flex flex-col gap-2 text-white font-bold text-2xl md:text-4xl">
            <span>Popular</span>
            <span>Blogs</span>
            <span>of</span>
            <span>the</span>
            <span>Month</span>
          </div>
        </div>
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default PopularBlogs;
