"use client";
import UserProfile from "@/components/blog1/UserProfile";
import FollowMe from "@/components/blog1/FollowMe";
import FeaturedPosts from "@/components/blog1/FeaturedPosts";
import Blog from "@/components/blog3/Blog";
import { useCallback, useEffect, useState } from "react";

export default function SlugPage({ params }) {
  const [blogData, setBlogData] = useState({});
  const { slug } = params;

  const handleGetBlog = useCallback(async () => {
    try {
      const response = await fetch(`/api/get-blog?slug=${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setBlogData(result);
    } catch (error) {
      console.error("Blog Get operation error", error);
    }
  }, [slug]);

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
  }, [handleGetBlog, slug]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-x-10">
        <div className="col-span-8">{blogData && <Blog blog={blogData} />}</div>

        <div className=" col-span-4 space-y-10">
          <UserProfile />
          <FollowMe />
          <FeaturedPosts />
        </div>
      </div>
    </div>
  );
}
