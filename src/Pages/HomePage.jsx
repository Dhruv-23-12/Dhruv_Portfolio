import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeRightSection from "./HomeRightSection.jsx";
import Animtext from "./animation.jsx";

// React Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from "react-icons/fa";
import { SiFlutter, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const experienceCards = [
    {
      Icon: FaHtml5,
      title: "HTML Developer (2023)",
      desc: "Specialized in creating responsive and SEO-friendly web pages.",
    },
    {
      Icon: FaCss3Alt,
      title: "CSS Developer (2023)",
      desc: "Proficient in designing visually appealing and user-friendly interfaces.",
    },
    {
      Icon: FaJsSquare,
      title: "JavaScript Developer (2023)",
      desc: "Skilled in building interactive and dynamic web applications.",
    },
    {
      Icon: SiFlutter,
      title: "Flutter Developer (2023)",
      desc: "Experienced in crafting cross-platform mobile applications.",
    },
    {
      Icon: FaReact,
      title: "React-Js Developer (2024)",
      desc: "Utilized React Hooks (useState, useEffect, useContext) for clean state management.",
    },
    {
      Icon: SiTailwindcss,
      title: "Tailwind CSS Developer (2024)",
      desc: "Built modern, responsive designs using Tailwind utility-first classes.",
    },
    {
      Icon: SiPostgresql,
      title: "PostgreSQL Database (2025)",
      desc: "Designed and managed relational databases with PostgreSQL.",
    },
  ];

  return (
    <>
      <div className="relative z-10">
        <section className="min-h-screen bg-transparent text-white flex flex-col md:flex-row justify-around items-center px-4 py-20">
          {/* Left Section */}
          <motion.div
            className="md:w-2/5 text-2xl md:text-5xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              Hiii, My Self Yadav{" "}
              <span className="text-purple-400">Dhruv</span>
            </p>
            <p className="mt-2">and I'm a Passionate</p>
            <span className="text-purple-400 font-bold">
              <Animtext />
            </span>

            {/* Social Media */}
            <div className="flex mt-8 space-x-4">
              <Link
                to="https://www.instagram.com/it_s___d"
                target="_blank"
                className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-black transition"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to="https://wa.me/+918347179229"
                target="_blank"
                className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-black transition"
              >
                <FaWhatsapp size={20} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/dhruvkumar-yadav-665a57287/"
                target="_blank"
                className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-black transition"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                to="https://github.com/Dhruv-23-12"
                target="_blank"
                className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-black transition"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                to="mailto:dhruvyadav231203@gmail.com"
                className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-black transition"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>

            <Link
              to="/about"
              className="inline-block mt-8 bg-pink-500 text-white py-3 px-5 rounded-full hover:shadow-lg transition"
            >
              More About Me
            </Link>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-2/5 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <HomeRightSection />
          </motion.div>
        </section>

        {/* Second Section */}
        <section className="bg-transparent text-white py-16 px-4 text-center">
          <span className="text-gray-400 text-sm">What I Have Done So Far</span>
          <h1 className="text-3xl font-bold mt-2 text-purple-400">Work Experience</h1>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {experienceCards.map(({ Icon, title, desc }, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md w-64 cursor-pointer transform transition hover:-translate-y-2 hover:shadow-lg border border-purple-500/20"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Icon className="text-5xl text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-pink-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
