import Image from "next/image";
import Link from "next/link";

export default function BlogLists({ blogData }) {
  return (
    <div className="space-y-10">
      {blogData &&
        blogData.map((blog) => (
          <div key={blog.id} className="space-y-4 ">
            <div className="card-zoom bg-gray-100 w-[100%] h-[300px] sm:h-[450px] rounded-xl ">
              <div className="card-zoom-image">
                <Image src={blog.image} alt="img" fill className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3 pb-2">
              <h2 className="text-gray-800 text-2xl font-bold">{blog.title}</h2>
              <Link
                href={`blog3/${blog.slug}`}
                className="bg-indigo-500 hover:bg-indigo-800 text-white hover:text-gray-200 shadow-2xl hover:shadow-none font-semibold px-6 py-2 rounded-full">
                Read More
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
