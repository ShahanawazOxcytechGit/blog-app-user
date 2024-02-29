"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [tutorialTopics, setTutorialTopics] = useState([]);

  useEffect(() => {
    const fetchTutorialTopics = async () => {
      try {
        const response = await axios.get("/api/get-tutorial-topics");
        setTutorialTopics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTutorialTopics();
  }, []);

  const blogNavItems = useMemo(() => tutorialTopics.map((tt) => ({ label: tt.title, href: `/tutorial` })), [tutorialTopics]);

  const handleNav = () => {
    setOpen(!open);
  };

  const renderNavItem = (item, index) => (
    <div key={index} onClick={handleNav} className="border-b-2 border-gray-200 py-2">
      <Link
        href={item.href}
        className="group block bg-gray-100 hover:bg-indigo-500 transition duration-300 text-gray-700 hover:text-white p-2 rounded-md">
        <div className="flex justify-start items-center space-x-4">
          <span className="text-base font-semibold">{item.label}</span>
        </div>
      </Link>
    </div>
  );

  return (
    <>
      <button onClick={handleNav} className="block w-full md:hidden bg-indigo-500 rounded-xl px-4 py-2">
        <i className={`bi bi-chevron-double-${open ? "up" : "down"} text-white text-xl font-bold`} />
      </button>

      <div className={`bg-white ${!open ? "h-full" : "hidden md:block"} mt-0 sm:-mt-2 space-y-10 rounded-xl`}>
        <div>{blogNavItems.map(renderNavItem)}</div>
      </div>
    </>
  );
}
