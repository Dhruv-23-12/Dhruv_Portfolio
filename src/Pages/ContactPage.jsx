import React from 'react'
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <section className="bg-transparent py-16 px-4 min-h-screen flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-purple-400/30"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">
            Contact Me
          </h1>
          <p className="text-lg text-purple-100 mb-10">
            If you have any questions or would like to collaborate, feel free to reach out!
          </p>

          {/*
          <form className="flex flex-col gap-6 text-left">
            <div>
              <label htmlFor="name" className="block mb-2 text-purple-200 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-purple-300 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-purple-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-purple-200 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Your Email Address"
                className="w-full px-4 py-3 border border-purple-300 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-purple-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-purple-200 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-purple-300 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-purple-200"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="self-start bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
          */}

          <a
            href="https://forms.gle/2Dnq6C8HoxJj7gqu9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 mt-6"
          >
            Open Contact Form
          </a>
        </motion.div>
      </section>
    </>
  )
}
