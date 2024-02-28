"use client";
import UserProfile from "@/components/blog1/UserProfile";
import FollowMe from "@/components/blog1/FollowMe";
import FeaturedPosts from "@/components/blog1/FeaturedPosts";
import { useCallback, useEffect, useState } from "react";
import Tutorial from "@/components/tutorial/Tutorial";

export default function SlugPage({ params }) {
  const [tutorialData, setTutorialData] = useState({});
  const [loading, setLoading] = useState(false);
  const { slug } = params;

  const handleGetTutorial = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/get-tutorial?slug=${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setTutorialData(result);
    } catch (error) {
      console.error("Tutorial Topic Get operation error", error);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (slug) {
          await handleGetTutorial();
        }
      } catch (error) {
        console.error("Error fetching tutorial data:", error);
      }
    }
    fetchData();
  }, [handleGetTutorial, slug]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-x-10">
        <div className="col-span-12">{loading ? <div className="text-center">Loading...</div> : <Tutorial tutorial={tutorialData} />}</div>
      </div>
    </div>
  );
}
