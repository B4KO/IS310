import React from "react";
import { motion } from "framer-motion";

const TypingHeader = ({ text }) => {
  const letters = Array.from(text);

  return (
    <div className="flex overflow-hidden">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="text-9xl font-bold inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.1,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingHeader;
