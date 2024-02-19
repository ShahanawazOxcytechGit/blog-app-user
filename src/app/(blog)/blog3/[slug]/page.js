"use client"
// import { blogData } from "@/components/blog1/blogData"
// import BlogLists from "@/components/blog1/BlogLists"
import UserProfile from "@/components/blog1/UserProfile";
import FollowMe from "@/components/blog1/FollowMe";
import FeaturedPosts from "@/components/blog1/FeaturedPosts";
import Blog from "@/components/blog3/Blog";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function SlugPage({ params }) {

  const { slug } = params

  const [blogData, setBlogData] = useState({});

  const handleGetBlog = async (e) => {
    try {
      
      const response = await fetch(`/api/getblog?slug=${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        });

      const { error, result } = await response.json();

      setBlogData(result)

      if (error !== undefined) {
        console.log('Blog Get error:', error);
      }
    } catch (error) {
      console.error('Blog Get operation error', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (slug) {
          await handleGetBlog();
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchData();
  }, [slug]); // Add slug as dependency to rerun effect when slug changes

  return (
    <div style={{ overflowY: "scroll", scrollbarColor: "white white", scrollbarWidth: 'thin', height: '100vh' }}>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="mx-auto max-w-2xl px-6 py-10 sm:px-8 sm:py-16 lg:max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-x-10">
            <div className="col-span-8">
              {blogData && <Blog blog={blogData} />}
            </div>

            <div className=" col-span-4 space-y-10">
              <UserProfile />
              <FollowMe />
              <FeaturedPosts />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
