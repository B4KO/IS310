import React from "react";

const SkillCard = ({ icon, title, skills }) => (
  <div className="card bg-base-100 shadow-xl text-center p-6 flex flex-col justify-between">
    <div>
      <div className="text-5xl">{icon}</div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-base mt-2">{skills}</p>
    </div>
  </div>
);

const SkillsSection = ({ skills }) => (
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Våre ferdigheter</h1>
        <p className="py-6">Her er våre ferdigheter som gjør oss utstående.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-0 w-full">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
