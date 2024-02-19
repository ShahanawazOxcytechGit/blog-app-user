"use client"
import { useState, useEffect } from "react";
import { blogData } from "@/components/blog1/blogData"
import BlogLists from "@/components/blog1/BlogLists"
import Pagination from "@/components/common/Pagination"
import UserProfile from "@/components/blog1/UserProfile";
import FollowMe from "@/components/blog1/FollowMe";
import FeaturedPosts from "@/components/blog1/FeaturedPosts";
import Nav from "@/components/blog2/Nav";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    
  
    const [currentPage, setCurrentPage] = useState(1);
    const totalBlogs = blogData.length;
    const blogsPerPage = 6;

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;

    // Slice the data to display only the items for the current page
    const displayedData = blogData.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [totalBlogs]);

    const handlePageChange = (pageNo) => {
        setCurrentPage(pageNo);
    };

    return (
      <div  style={{overflowY:"scroll",scrollbarColor:"white white",scrollbarWidth:'thin',height:'100vh'}}>
        <header>
          <Navbar/>
        </header>
        <main>
          <div className=" px-6 py-4 sm:px-8 sm:py-4 ">
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-10 md:gap-x-4 lg:gap-x-6">
              <div className="order-1 md:col-span-4 md:order-1 lg:col-span-2 lg:order-1">
                <Nav />
              </div>

              <div className="order-3 md:col-span-12  md:order-3  lg:col-span-7 lg:order-2">
                <BlogLists blogData={displayedData} />
                <Pagination
                  handlePageChange={handlePageChange}
                  currentPage={currentPage}
                  totalBlogs={totalBlogs}
                  blogsPerPage={blogsPerPage}
                  startIndex={startIndex}
                  endIndex={endIndex}
                />
              </div>

              <div className="order-2 md:col-span-8  md:order-2 lg:col-span-3 lg:order-3 space-y-10">
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
