import React from "react";
import axios from "axios";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { data } from "@/data/data.js";
import { useState, useEffect } from "react";
const Allblogs = () => {
  const [blogsData, setBlogData] = useState([]);
  //use effect frontend-backend logic
  useEffect(() => {
    axios
      .post("https://savorshare.onrender.com/blog/getbyid", {
        userid: localStorage.getItem("user")._id,
      })
      .then((response) => {
        // handle the response data
        setBlogData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // handle the error
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen" style={{ fontSize: "18px" }}>
      <div className="flex justify-between p-4">
        <h2>All Blogs</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Blog Name</span>

            <span className="sm:text-left text-right">No of Likes</span>
            <span className="hidden md:grid">No of Comments</span>
            <span className="hidden sm:grid">Date Created</span>
          </div>
          <ul>
            {blogsData.map((it, index) => (
              <li
                key={index}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <IoMdPhotos className="text-purple-800" />
                  </div>
                  <p className="pl-4">{it.title}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {it.likes.length}
                </p>
                <p className="hidden md:flex">{it.comments.length}</p>

                <div className="sm:flex hidden justify-between items-center">
                  <p>{it.date}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Allblogs;
