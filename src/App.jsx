import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-around">
      <video
        className="h-full fixed top-0 left-0 right-0 bottom-0 w-full rounded-lg"
        autoPlay
        loop
        playsInline
        controls
      >
        <source src="/Bài hát Happy Birthday hài hước.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src="/z5748184414895_ccb15495cee582493cb86f26eaa86c43.jpg"
        className="w-1/3 h-1/3 ani"
        alt=""
      />
      <div className="flex flex-col z-10 items-center anif">
        <p className="text-white text-[3rem]">Chúc Mừng</p>
        <p className="text-white text-[3rem]">Sinh Nhật</p>
        <p className="text-white text-[3rem]">Bạn Trang</p>
      </div>
    </div>
  );
}

export default App;
