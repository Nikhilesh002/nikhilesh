"use client"
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";
import { ABOUT_TEXT } from "@/constants/static_data.js";
import {SOCIAL} from "@/constants/static_data.js";
import Image from "next/image";

function About() {
  return (
    <div className="border-b border-neutral-900 pt-1 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay:0.15}}
          className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex items-center justify-center">
            <Image className="rounded-3xl" src={aboutImg} alt="about img" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay:0.15}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="p-2 flex flex-col items-center justify-center lg:justify-start">
            <div className="flex px-20 gap-3 ">
              {
                SOCIAL.map((website,index)=>(
                  <a className="inline" target="__blank" key={index} href={website.link}>
                    <Image className={`${website.styles} w-10 `} src={website.img} alt="logo" />
                  </a>
                ))
              }
            </div>
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
