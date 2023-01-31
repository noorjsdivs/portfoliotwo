import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Sidenav from "./components/home/sidenav/Sidenav";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
    });
  }, []);
  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">
      {/* ================= Left Icons End here ======================== */}
      <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4">
        {/* ======= Home Icon start */}
        <div
          onClick={() => setSidenav(true)}
          className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group"
        >
          <div className="flex flex-col gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
        {/* ======= Home Icon End */}

        {/* ============= Sidenav Start here ============= */}
        {sidenav && (
          <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <div className="w-96 h-full relative">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
              >
                <Sidenav />
                <span
                  onClick={() => setSidenav(false)}
                  className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50"
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}
        {/* ============= Sidenav End here =============== */}
        {/* ======= Other Icons Start */}
        <div className="w-full h-80 bg-bodyColor rounded-3xl flex flex-col items-center justify-between py-6">
          {/* About Icon */}
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              about
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
            // className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaUser />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </span>
          {/* Resume Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              resume
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <IoIosPaper />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Resume
            </span>
          </span>
          {/* Project Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              projects
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <MdWork />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Projects
            </span>
          </span>
          {/* Blog Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(true) &
              setContact(false)
            }
            className={`${
              blog
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <SiGooglechat />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Blog
            </span>
          </span>
          {/* Contact Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
            }
            className={`${
              contact
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <BsTelephonePlusFill />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Call
            </span>
          </span>
        </div>
        {/* ======= Other Icons End */}
      </div>
      {/* ================= Left Icons Start here ====================== */}
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Blog />
            <Contact />
          </div>
          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
