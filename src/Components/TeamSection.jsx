import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const TeamSection = ({ teamMembers }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
      <motion.div
  className="flex flex-wrap justify-center items-stretch gap-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
>
  {teamMembers.map((member, index) => (
    <Card
      key={index}
      imageUrl={member.imageUrl}
      title={member.title}
      description={member.description}
      linkedinUrl={member.linkedinUrl}
      githubUrl={member.githubUrl}
    />
  ))}
</motion.div>

      </div>
    </div>
  );
};

export default TeamSection;
