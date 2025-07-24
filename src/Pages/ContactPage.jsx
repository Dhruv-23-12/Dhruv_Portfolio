// The previous contact form implementation has been replaced by a Google Form link as per the latest update.
// If you want to restore the old form, check the previous version in version control.
import React from 'react';
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
          <a
            href="https://forms.gle/2Dnq6C8HoxJj7gqu9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300"
          >
            Fill Out My Google Contact Form
          </a>
        </motion.div>
      </section>
    </>
  );
}
