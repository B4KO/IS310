import React from "react";

const InfoSection = ({ title, description, buttonLabel }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
