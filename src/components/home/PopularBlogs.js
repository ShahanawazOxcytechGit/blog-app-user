import React from "react";
import BlogCard from "./BlogCard";

const PopularBlogs = () => {
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
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="mt-5 flex justify-center md:justify-between flex-wrap gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default PopularBlogs;
