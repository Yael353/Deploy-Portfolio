"use client";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import React from "react";
import { useTypewriter, cursor, Cursor } from "react-simple-typewriter";

function Body() {
  const animationData = require("../assets/projects.json");
  const [text, count] = useTypewriter({
    words: [
      "Hi! My name is Yaser!",
      "I'm a passionate web developer",
      "Let's turn dreams into reality!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);

  return (
    <section id="About" className="py-8">
      <div className="container px-4 mx-auto">
        {/* first part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col items-start md:w-2/4 mt-0 md-mt-20">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-slate-400">{text}</span>
              <Cursor />
            </h1>
            <p className="text-white text-xl md:text-2xl mb-3 mt-2">
              I am a frontend Developer in the early stages of my journey, keen
              on learning and actively contributing to the community!
            </p>
            <div>
              <button className="bg-blue-400 text-white px-4 py-1 rounded-full mr-4 hover:bg-blue-600">
                Learn More
              </button>
              <a href="#Contact">
                <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded-full hover:bg-gray-400">
                  Contact Me
                </button>
              </a>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              Code | Adapt | Innovate
            </p>
          </div>
          <div className="md:w-1/2 z-auto pt-2 md:mt-0 ">
            <div className="container " ref={container}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
