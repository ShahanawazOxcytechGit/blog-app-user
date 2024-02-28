"use client";
import CommonTable from "@/components/common/CommonTable";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";

const TutorialTopics = () => {
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "sr_no",
        header: "Sr. No.",
        enableEditing: false,
        size: 100,
      },
      {
        accessorKey: "title",
        header: "Title",
        enableEditing: false,
      },
    ],
    []
  );

  const tutData = useMemo(
    () =>
      tutorialTopics.map((tt, ind) => ({
        sr_no: ind + 1,
        title: (
          <Link href={`/employee/tutorial/${tt.slug}`} className="text-blue-500 underline uppercase font-bold">
            {tt.title}
          </Link>
        ),
      })),
    [tutorialTopics]
  );

  return <CommonTable columns={columns} data={tutData} />;
};

export default TutorialTopics;
