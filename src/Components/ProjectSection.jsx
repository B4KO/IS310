import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  longer_description,
  modalId,
}) => {
  return (
    <motion.div
      className="card bg-base-100 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {/* Open the modal using document.getElementById(modalId).showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById(modalId).showModal()}
        >
          Les mer
        </button>
        <dialog id={modalId} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{longer_description}</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </motion.div>
  );
};

const ProjectSection = ({ projects }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <motion.div
          className="text-center lg:text-left mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold">Tidligere Prosjekter</h1>
          <p className="py-6">
            Her er noen prosjekter vi har jobbet på. Vi har en diverse porfølje
            med ferdige prosjekter som viser våre ferdigheter og ekspertise.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-0 w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              longer_description={project.longer_description}
              modalId={`modal_${index}`} // Unique modal ID based on index
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
