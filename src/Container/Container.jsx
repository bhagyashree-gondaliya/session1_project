import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Header from "../Component/Header/Header";
import Home from "../Component/Pages/Home";
import Footer from "../Component/Footer/Footer";
import Blogs from "../Component/Pages/Blogs/Blogs";
import Contact from "../Component/Pages/Contacts";
import DevJokes from "../Component/Pages/DevJokes";
import { Routes, Route } from "react-router-dom";

function Container(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          theme === "light"
            ? "min-h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-blue-200 background-animate"
            : "min-h-screen bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devJokes" element={<DevJokes />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Container;
