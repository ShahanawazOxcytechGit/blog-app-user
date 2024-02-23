"use client";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import CommonTable from "@/components/common/CommonTable";
import axios from "axios";

const TutorialSubtopics = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [metaData, setMetaData] = useState("");
  const [content, setContent] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor.core.setContents(content);
    }
  }, [content]);

  const getAllTutorials = async () => {
    try {
      const response = await axios.get("/api/get-all-tutorial-subtopics");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching all tutorials:", error);
    }
  };

  useEffect(() => {
    getAllTutorials();
  }, []);

  const handleAddTutorial = () => {
    setOpenDialog(true);
  };
  const handleAddTutorialApi = async () => {
    const body = { title, metaData, content };
    try {
      const response = await axios.post("/api/add-tutorial-subtopic", body);
      return response;
    } catch (err) {
      console.error(err);
    } finally {
      setOpenDialog(false);
      getAllTutorials();
      setTitle("");
      setMetaData("");
      setContent("");
    }
  };

  const handleUpdate = (row) => {
    setUpdateModalOpen(true);
    setSelectedId(row.original.id);
    setTitle(row.original.title);
    setMetaData(row.original.metaData);
    setContent(row.original.content);
  };

  const handleUpdateApi = async (e) => {
    const body = { selectedId, title, metaData, content };

    try {
      const response = await axios.put("/api/update-tutorial-subtopic", body);

      return response;
    } catch (error) {
      console.error("tutorial Update operation error", error);
    } finally {
      setUpdateModalOpen(false);
      getAllTutorials();
      setTitle("");
      setMetaData("");
      setContent("");
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Serial No.",
      },
      {
        accessorKey: "title",
        header: "Title",
        enableEditing: false,
      },
      {
        accessorKey: "metaData",
        header: "MetaData",
        enableEditing: false,
      },
      {
        accessorKey: "action",
        header: "Action",
        Cell: ({ row }) => {
          return (
            <div className="text-xs">
              <div className="flex items-center gap-4">
                <button className="text-xs text-blue-500" type="button" onClick={() => handleUpdate(row)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div>
      <button className="text-white px-2 py-1 rounded-md bg-blue-500 mb-2" onClick={handleAddTutorial}>
        Add tutorial
      </button>
      <CommonTable columns={columns} data={data} />
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add Tutorial</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", px: 4 }}>
          <div className="flex flex-col items-center gap-3 py-5 lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-col gap-3">
              <input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tutorial Title"
                className="text-sm md:text-base w-full h-[30px] md:h-[40px] px-2 py-0 border-gray-300 placeholder-gray-500 outline-none rounded-md"
              />
              <input
                type="text"
                id="metaData"
                name="metaData"
                value={metaData}
                onChange={(e) => setMetaData(e.target.value)}
                placeholder="Tutorial MetaData"
                className="text-sm md:text-base w-full h-[30px] md:h-[40px] px-2 py-0 border-gray-300 placeholder-gray-500 outline-none rounded-md"
              />

              <SunEditor
                ref={editorRef}
                setContents={content}
                onChange={setContent}
                placeholder="Tutorial Content"
                setOptions={{
                  width: "100%", // Use percentage for width
                  height: "400px", // Use px unit for height
                  buttonList: [
                    ["undo", "redo"],
                    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                    ["removeFormat"],
                    ["outdent", "indent"],
                    ["fullScreen", "showBlocks", "codeView"],
                    ["preview", "print"],
                    ["link", "image", "video"],
                    ["font", "fontSize", "formatBlock", "align", "list", "table"],
                    ["fontColor", "hiliteColor", "horizontalRule"],
                  ],
                  font: ["Arial", "Courier New"], // Example: specify fonts
                  fontColor: "red", // Set font color
                  backgroundColor: "red", // Set background color
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTutorialApi}>Save</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isUpdateModalOpen}
        onClose={() => {
          setUpdateModalOpen(false);
          setTitle("");
          setMetaData("");
          setContent("");
        }}
        maxWidth="md"
        fullWidth>
        <DialogTitle>Update Tutorial</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", px: 4 }}>
          <div className="flex flex-col items-center gap-3 py-5 lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-col gap-3">
              <input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tutorial Title"
                className="text-sm md:text-base w-full h-[30px] md:h-[40px] px-2 py-0 border-gray-300 placeholder-gray-500 outline-none rounded-md"
              />
              <input
                type="text"
                id="metaData"
                name="metaData"
                value={metaData}
                onChange={(e) => setMetaData(e.target.value)}
                placeholder="Blog MetaData"
                className="text-sm md:text-base w-full h-[30px] md:h-[40px] px-2 py-0 border-gray-300 placeholder-gray-500 outline-none rounded-md"
              />

              <SunEditor
                ref={editorRef}
                setContents={content}
                onChange={setContent}
                placeholder="Tutorial Content"
                setOptions={{
                  width: "100%", // Use percentage for width
                  height: "400px", // Use px unit for height
                  buttonList: [
                    ["undo", "redo"],
                    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                    ["removeFormat"],
                    ["outdent", "indent"],
                    ["fullScreen", "showBlocks", "codeView"],
                    ["preview", "print"],
                    ["link", "image", "video"],
                    ["font", "fontSize", "formatBlock", "align", "list", "table"],
                    ["fontColor", "hiliteColor", "horizontalRule"],
                  ],
                  font: ["Arial", "Courier New"], // Example: specify fonts
                  fontColor: "red", // Set font color
                  backgroundColor: "red", // Set background color
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUpdateModalOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateApi}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TutorialSubtopics;
