import React from "react";
import { BlogData } from "../../../Utility/BlogsData";
import Talks from "./Talks";
import BlogCard from "./BlogCard";

function Blogs(props) {
  return (
    <main className="mx-10">
      <main className="w-full flex flex-col mt-24 mb-24 overflow-hidden">
        <div className="flex flex-row justify-between mb-10">
          <h2 className="text-xl lg:text-3xl w-auto">Blog Posts </h2>
          <span className="border-0 focus:outline-none hover:text-blue-600 lg:hover:font-bold rounded text-base md:text-md cursor-pointer hover:underline">
            Read all articles
          </span>
        </div>
        <BlogCard BlogData={BlogData} />
      </main>
      <Talks />
    </main>
  );
}

export default Blogs;
