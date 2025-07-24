import { motion } from 'framer-motion';
import currency from '../assets/image/currency-img.png';
import stone from '../assets/image/stone-img.png';
import tictac from '../assets/image/tictac-img.png';
import Portfolio from '../assets/image/Portfolio-image.png'

function ProjectsPage() {
  const projects = [
    {
      img: stone,
      title: 'Stone Paper Scissor',
      desc: 'A simple and interactive game that simulates the classic "Rock, Paper, Scissors" battle.',
      github: 'https://github.com/Dhruv-23-12/Stone-Paper-Scissor',
      play: 'https://dhruv-23-12-stone-paper-scissor.vercel.app/'
    },
    {
      img: tictac,
      title: 'Tic Tac Toe',
      desc: 'A simple and interactive implementation of the classic Tic Tac Toe game.',
      github: 'https://github.com/Dhruv-23-12/tictac',
      play: 'https://tictac-dhruvyadav.vercel.app/'
    },
    {
      img: currency,
      title: 'Currency Exchange',
      desc: 'A seamless and secure solution for exchanging currencies with real-time rates.',
      github: 'https://github.com/Dhruv-23-12/currency-exchange'
    },
    {
      img:Portfolio,
      title: 'My Portfolio',
      desc: 'A showcase of my work, skills, and experience as a developer.',
      github: 'https://github.com/Dhruv-23-12/Dhruv_Portfolio',
    }
  ];

  return (
    <>
      <section className="bg-transparent text-white py-16 px-4 text-center min-h-screen relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">My Projects</h1>
          <p className="text-lg text-purple-100 mb-12">
            Here are some of the projects I've worked on. Click on the buttons to view the code or try it live!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ img, title, desc, github, play }, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2 border border-purple-400/30"
                whileHover={{ scale: 1.04 }}
              >
                {img && <img src={img} alt={title} className="w-full h-48 object-cover" />}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2 text-pink-300">{title}</h3>
                  <p className="mb-4 text-purple-100">{desc}</p>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded mr-2 mb-2 shadow-md transition-all duration-300"
                  >
                    View Code
                  </a>
                  {play && (
                    <a
                      href={play}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-cyan-500 hover:to-green-500 text-white font-semibold py-2 px-4 rounded mb-2 shadow-md transition-all duration-300"
                    >
                      Play Game
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
