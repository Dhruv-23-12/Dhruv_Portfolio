import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileimg from '../assets/image/profile-image.jpg';
// Remove import BackgroundAnimation from '../Common/BackgroundAnimation';

export default function AboutContact() {
  return (
    <>
      <section className="min-h-screen bg-transparent text-white px-4 py-16 flex flex-col items-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">About Me</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl">
          <motion.div
            className="max-w-xl text-left bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-400/30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 leading-relaxed text-lg text-purple-100">
              Hello! I'm <strong className="text-pink-300">DhruvKumar Yadav</strong>, a dedicated and aspiring <strong className="text-blue-300">B.Tech Computer Science student</strong> at PP Savani University. I have a diploma in Computer Science, which laid the foundation for my passion for technology and innovation.
            </p>
            <p className="mb-4 leading-relaxed text-lg text-purple-100">
              I specialize in <strong className="text-pink-300">Full Stack Development</strong> and <strong className="text-blue-300">Frontend Development, Backend Development and Web Development</strong>. During my diploma, I gained hands-on experience in technologies like HTML, CSS, JavaScript, React js, Tailwind css and Postgrey for Database. For my final-year project, my team and I developed an AI-powered Flutter application to help locate missing persons—an experience that deepened my understanding of practical problem-solving using technology.
            </p>
            <p className="mb-4 leading-relaxed text-lg text-purple-100">
              Currently, I am enhancing my skills by working on various projects that challenge me to learn and grow. I enjoy building user-friendly applications and exploring new technologies to stay updated in this dynamic field.
            </p>
            <p className="mb-6 leading-relaxed text-lg text-purple-100">
              In addition to my technical expertise, I am committed to continuous improvement and enjoy collaborating with others on innovative projects. I am also passionate about sports, especially cricket, which helps me stay active and sharp. My ultimate goal is to create impactful solutions that make a difference in the world.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            className="w-52 h-52 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg bg-white/20 backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={profileimg} alt="Yadav Dhruv's Photo" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
