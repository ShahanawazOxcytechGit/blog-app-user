"use client"
import Image from "next/image"
import Link from "next/link"

export default function Blog({ blog }) {

    return (
        <div className="space-y-10">
            {
                <div className="space-y-4 ">
                    <div className="card-zoom bg-gray-100 w-full h-[28vh] sm:h-[60vh] rounded-xl ">
                        <button className="absolute z-10 top-4 end-4 bg-indigo-500 hover:bg-indigo-700 text-white hover:text-gray-200 shadow-2xl hover:shadow-none font-semibold p-2 rounded-full " >
                            </button>
                        <div className="card-zoom-image">
                            <Link href='/' >
                                <Image src={blog.image} width={1000} height={1000} className="h-[100%]" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-6 pb-6">
                        
                        <Link href='/'>
                            <h1 className="text-gray-800 hover:text-red-600 hover:underline text-2xl font-bold">{blog.title}</h1>
                        </Link>
                        
                        <p className="text-justify text-gray-600 text-base font-normal leading-8" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                        {/* <p className="text-justify text-gray-600 text-base font-normal leading-8">{blog.content}</p> */}
                    </div>
                </div>

            }
        </div>
    )
}
