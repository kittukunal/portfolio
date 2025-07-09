import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// ✅ Custom icons
import ResumeLogo from "../assets/resume.png";
import LinkedInLogo from "../assets/linkedin.png";
import GitHubLogo from "../assets/github.png";

const Hero = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      
      {/* Dark Overlay to dim background */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Main Content */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 z-10">
        
        {/* Line and Circle */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00FFF7]" />
          <div className="w-1 sm:h-80 h-40 cyan-gradient" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white flex flex-wrap items-center gap-2`}>
            {!typingDone ? (
              <Typewriter
                words={["Hi, I'm Kunal"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={0}
                delaySpeed={500}
                onLoopDone={() => setTypingDone(true)}
              />
            ) : (
              <>
                <span>Hi, I'm</span>
                <span className="bg-gradient-to-r from-[#00FFD1] to-[#00FFFF] text-transparent bg-clip-text ml-2">
                  Kunal
                </span>
                <span className="text-white ml-1 animate-blink">_</span> 
              </>
            )}
          </h1>

          <p className={`${styles.heroSubText} mt-2 bg-gradient-to-r from-[#00FFD1] to-[#00FFFF] text-transparent bg-clip-text`}>
            I develop <br className="sm:block hidden" />
            web applications
          </p>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap gap-6">

            {/* ✅ Paste your actual resume file link below */}
            <a
              href="https://drive.google.com/file/d/1YjTTOiwUNItec8n6eMEB3DpuRec2HXMX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-2"
            >
              <img src={ResumeLogo} alt="Resume" className="w-6 h-6" />
              View Resume
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-yadav-5062962a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-2"
            >
              <img src={LinkedInLogo} alt="LinkedIn" className="w-6 h-6" />
              LinkedIn
            </a>

            <a
              href="https://github.com/kittukunal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-2"
            >
              <img src={GitHubLogo} alt="GitHub" className="w-6 h-6" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Portal Video */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
