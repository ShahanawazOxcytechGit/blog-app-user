import React from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
const BlogCard = ({ blog }) => {
  // const router = useRouter();

  if (!blog) {
    return (
      <div className="p-6 bg-gray-600 rounded-2xl text-white w-[250px] h-[300px]">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="p-6 bg-gray-300 rounded-2xl text-white w-[250px] h-80 overflow-auto ">
      <div className="flex gap-2 items-center">
        <span className="bg-black rounded-full px-3 py-1 font-bold">A</span>
        <h3 className=" text-gray-900 font-semibold hover:text-gray-500 cursor-pointer">
          Author
        </h3>
      </div>
      <div>
        <h3
          className=" text-gray-900 font-semibold hover:text-gray-500 cursor-pointer"
          // onClick={() => router.push("/employee")}
        >
          {blog.title}
        </h3>
      </div>
      <div className="mt-4 text-white">{parse(blog.content)}</div>
    </div>
  );
};

export default BlogCard;
