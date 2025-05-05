import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const CertificateCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={() => window.open(source_code_link, "_blank")}
        >

      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className="relative w-full h-[230px] cursor-pointer group"
        >
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
        />
        </div>


      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <h2 className="sectionHeadText text-[40px] sm:text-[50px] font-extrabold text-white">
        My Certificates.
       </h2>

        
      </motion.div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are a few certificates I’ve earned by completing trainings and projects.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");

