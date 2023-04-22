import Image from "next/image";
import Link from "next/link";
import ConnectImg from "../public/assets/projects/connect-4.png";
import CryptoImg from "../public/assets/projects/crypto.png";
import DisneyImg from "../public/assets/projects/disney.png";
import IndieCrypt from "../public/assets/projects/IndieCrypt.png";
import React from "react";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#e4e4e7]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Connect 4"
            backgroundImg={ConnectImg}
            ProjectUrl="/Property"
            Tech="JQuery"
          />
          <ProjectItem
            title="Crypto"
            backgroundImg={CryptoImg}
            ProjectUrl="/Crypto"
            Tech="React JS"
          />
          <ProjectItem
            title="Disney plus"
            backgroundImg={DisneyImg}
            ProjectUrl="/Disney"
            Tech="React JS"
          />
          <ProjectItem
            title="IndieCrypt"
            backgroundImg={IndieCrypt}
            ProjectUrl="/IndieCrypt"
            Tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
