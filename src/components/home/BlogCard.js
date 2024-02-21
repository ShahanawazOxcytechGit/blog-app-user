import React from "react";

const BlogCard = () => {
  return (
    <div className="p-6 bg-gray-600 rounded-2xl text-white w-[250px] h-[300px]">
      <div className="flex gap-2 items-center">
        <span className="bg-black rounded-full px-3 py-1 font-bold">A</span>
        <h3 className="font-semibold hover:text-gray-200 cursor-pointer">Blog Author</h3>
      </div>
      <h2 className="mt-4 font-semibold text-xl hover:text-gray-200 cursor-pointer">Blog Title</h2>
      <h4 className="mt-4 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam accusamus veritatis deleniti veniam quia.
      </h4>
    </div>
  );
};

export default BlogCard;
