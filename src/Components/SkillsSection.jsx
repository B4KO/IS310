import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, title, skills }) => (
  <motion.div
    className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div>
      <div className="text-5xl">{icon}</div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-base mt-2">{skills}</p>
    </div>
  </motion.div>
);

const SkillsSection = ({ skills }) => (
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold">Våre ferdigheter</h1>
        <p className="py-6">Her er våre ferdigheter som gjør oss utstående.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-0 w-full">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
