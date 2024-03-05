import { github, link as icon } from "../assets";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import React from "react";
import { Project } from "../types/global";

interface Props extends Project {
  index: number;
}
const ProjectCard: React.FC<Props> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  live_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
            {live_url && (
              <div
                onClick={() => window.open(live_url, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={icon}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link ? icon : github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-rows-[1fr_auto] justify-between">
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} `}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
