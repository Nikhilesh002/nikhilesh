"use client";
import profilePic from "@/assets/heroImg.png";
import { HERO_CONTENT } from "@/constants/static_data.js";
import { motion } from "framer-motion";
import Image from "next/image.js";
import { LuDownload } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-28">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="pt-16 flex flex-col justify-center items-center ">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-center pt-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "
            >
              <TypeAnimation
                preRenderFirstString={false}
                sequence={[
                  500,
                  "I'm G Sai Nikhilesh", // initially rendered starting point
                  1500,
                  "I'm a Full Stack Developer",
                  800,
                ]}
                speed={20}
                style={{ fontSize: "1.68em" }}
                repeat={Infinity}
              />
            </motion.p>

            <div className="mt-16">
              <a
                href={process.env.NEXT_PUBLIC_RESUME_LINK}
                target="__blank"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                <LuDownload className="inline-block text-center text-2xl pb-1 me-1 " />
                Resume
              </a>
            </div>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="my-2 max-w-xl pb-6 pt-12 font-light text-md "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex justify-center">
            <Image
              className="rounded-3xl"
              width={600}
              src={profilePic}
              alt="profile picture"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
