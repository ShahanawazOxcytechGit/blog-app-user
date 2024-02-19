import Image from "next/image";
import Link from "next/link";

export default function BlogLists({ blogData }) {
  return (
    <div className="space-y-10">
      {blogData && blogData.map((blog) => (
        <div key={blog.id} className="space-y-4 ">
          <div className="card-zoom bg-gray-100 w-[100%] h-[300px] sm:h-[450px] rounded-xl ">
            <button className="absolute z-10 top-4 end-4 bg-indigo-500 hover:bg-indigo-700 text-white hover:text-gray-200 shadow-2xl hover:shadow-none font-semibold p-2 rounded-full "></button>
            <div className="card-zoom-image">
              <Link href="/">
                <Image src={blog.image} alt="img" fill className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 pb-6">
            <Link href="/">
              <h1 className="text-gray-800 hover:text-red-600 hover:underline text-2xl font-bold">{blog.title}</h1>
            </Link>
            <Link
              href={`blog3/${blog.slug}`}
              className="bg-indigo-500 hover:bg-gray-800 text-white hover:text-gray-200 shadow-2xl hover:shadow-none font-semibold px-6 py-2 rounded-full ">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
