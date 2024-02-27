"use client";
import Image from "next/image";
import parse from "html-react-parser";

export default function Blog({ blog }) {
  return (
    <div className="space-y-10">
      {
        <div className="space-y-4">
          <div className="card-zoom bg-gray-100 w-full h-[28vh] sm:h-[60vh] rounded-xl">
            <div className="card-zoom-image">
              <Image src={blog.image} alt="blog-Image" width={1000} height={1000} className="h-[100%]" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <h2 className="text-gray-800 text-2xl font-bold">{blog.title}</h2>

            <p className="text-justify text-gray-600 text-base font-normal leading-8">{blog.content}</p>
          </div>
        </div>
      }
    </div>
  );
}
