"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

export default function ContactMe() {
  const form = useRef();
  const [isVerified, setisVerified] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  async function verify(value) {
    console.log(value);
    setisVerified(true);
    // Make an API call to verify reCAPTCHA response
    // const googleRes=await fetch("https://www.google.com/recaptcha/api/siteverify", {});
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const data = e.target;

    if (!isVerified) {
      toast.error("Captcha not verified");
      return;
    }

    if (
      data.email.value === "" ||
      data.name.value === "" ||
      data.message.value === ""
    ) {
      toast.error("Fill all inputs");
    } else {
      setisLoading(true);
      console.log(data.name.value);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setisLoading(false);
            toast.success("Message sent!!");
            data.email.value = "";
            data.name.value = "";
            data.message.value = "";
          },
          (error) => {
            toast.error("FAILED TO SEND EMAIL", error.text);
          }
        );
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="max-w-xl mx-auto mt-16 lg:p-8 rounded-lg font-mono"
      >
        <div className="relative p-[4px] group rounded-lg">
          <div className="absolute inset-0 z-[1] rounded-lg opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#64748b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_0_0,#d1d5db,#141316)]"></div>
          <div className="absolute inset-0 z-[1] rounded-lg will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#64748b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_0_0,#d1d5db,#141316)]"></div>
          <div className="relative z-[5] bg-slate-800 p-5 sm:p-8 rounded-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col text-white rounded-lg"
            >
              <h2 className="title-font mb-1 text-pink-300 text-3xl font-bold">
                Let&apos;s work together
              </h2>

              <div className="mb-4">
                <label htmlFor="name" className="text-sm leading-7">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full rounded border border-slate-500 bg-slate-700 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-sm leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full rounded border border-slate-500 bg-slate-700 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-sm leading-7">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  className="h-32 w-full resize-none rounded border border-slate-500 bg-slate-700 py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                ></textarea>
              </div>
              <div className="flex justify-center ">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  theme={"dark"}
                  onChange={verify}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-semibold hover:text-gray-200 focus:ring-purple-200 dark:focus:ring-purple-800  rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 mt-4"
              >
                {isLoading ? (
                  <p className="flex justify-center items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="animate-spin"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                    </svg>
                    <p>Sending</p>
                  </p>
                ) : (
                  <p>Send</p>
                )}
              </button>
            </form>
            <p className="text-sm text-slate-400">
              Or mail me at{" "}
              <a
                className="underline"
                target="__blank"
                href="mailto:nikhileshg02@gmail.com"
              >
                nikhileshg02@gmail.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
