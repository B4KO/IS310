import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  backgroundUrl,
  title,
  description,
  buttonLabel,
  buttonAction,
}) => {
  return (
    <motion.div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <motion.div
          className="max-w-md"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="mb-5 text-9xl font-bold text-white">{title}</h1>
          <h3 className="mb-5 text-lg text-white">{description}</h3>
          <motion.button
            className="btn btn-primary"
            onClick={buttonAction}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonLabel}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
