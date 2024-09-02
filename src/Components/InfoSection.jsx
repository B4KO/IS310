import React from "react";

const InfoSection = ({ imageUrl, title, description, buttonLabel }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={imageUrl}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Info Section"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <button className="btn btn-primary">{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
