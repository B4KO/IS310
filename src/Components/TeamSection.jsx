import React from "react";
import Card from "./Card";

const TeamSection = ({ teamMembers }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
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
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
