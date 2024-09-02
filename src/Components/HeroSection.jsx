import React from "react";

const HeroSection = ({
  backgroundUrl,
  title,
  description,
  buttonLabel,
  buttonAction,
}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-9xl font-bold text-white">{title}</h1>
          <h3 className="mb-5 text-lg text-white">{description}</h3>
          <button className="btn btn-primary" onClick={buttonAction}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
