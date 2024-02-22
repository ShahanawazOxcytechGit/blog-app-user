import PopularTutorials from "@/components/home/PolpularTutorials";
import PopularBlogs from "@/components/home/PopularBlogs";
import React from "react";

const page = () => {
  return (
    <>
      <PopularBlogs />
      <div className="mt-10">
        <PopularTutorials />
      </div>
    </>
  );
};

export default page;
