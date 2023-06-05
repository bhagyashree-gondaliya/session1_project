import React from "react";

function Home() {
  return (
    <div className="mx-5">
      <div className="grid grid-cols-8 gap-4 mt-12 mb-12">
        <div className="col-span-full lg:grid-cols-2 lg:col-start-5 lg:col-span-7 flex flex-col items-left ">
          <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
            <img
              style={{ width: "300px", height: "300px" }}
              src={Image}
              alt="avtar"
              className="rounded-full w-1/2 md:w-80 lg:w-80 bg-gradient-to-r from-purple-500 via-pink-500 to-white-500 p-2 cursor-pointer"
            ></img>
          </div>
        </div>
        <div className="col-span-full lg:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:col-span-4 flex justify-center cursor-pointer">
          <div className="MuiBox-root css-0 p-10">
            <h1 className="text-3xl">
              Hi, I'm <span>{"<Your Name>"}</span>
              <span>✋</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
