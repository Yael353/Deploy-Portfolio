"use client";

import React, { useEffect, useRef } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";

function Skills() {
  const skills = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "HTML",
    },
    {
      id: "6",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "CSS",
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 30,
      type: "Javascript",
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 40,
      type: "Tailwind",
    },
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 30,
      type: "React",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 30,
      type: "Next Js",
    },
  ];
  const container = useRef(null);
  const animationData = require("../assets/hello.json");

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <div id="Skills">
      <h3 className="tracking-[20px] text-center mx-auto uppercase text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {skills?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md:mt-0 ">
          <div className="container " ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
