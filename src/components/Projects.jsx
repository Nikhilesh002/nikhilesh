import { PROJECTS } from "../constants/static_data";
import { motion } from "framer-motion"
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pt-1 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0.2 }}
        transition={{ duration: 0.5,delay:0.15}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.a
              target="__blank"
              href={project.deployment}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5,delay:0.15}}
              className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={230}
                height={230}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.a>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6,delay:0.2}}
              className="w-full max-w-xl lg:w-3/4">
              <div className="mb-2 flex justify-between">
                <h6 className="font-semibold text-lg">{project.title}</h6>
                <div className="flex text-lg gap-4">
                  <a href={project.deployment} target="__blank"><GrDeploy/></a>
                  <a href={project.github} target="__blank"><FaGithub/></a>
                </div>
              </div>
              <p className="mb-4 text-neutral-400 ">{project.description}</p>
              {project.technologies.map((tech,index)=>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
