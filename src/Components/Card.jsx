import React from "react";

const Card = ({ imageUrl, title, description, linkedinUrl, githubUrl }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl min-h-[300px]">
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt={title} className="w-64 h-64 object-cover mx-auto " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <a
            href={linkedinUrl}
            className="btn bg-blue-700 text-white hover:bg-blue-800"
          >
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a
            href={githubUrl}
            className="btn bg-gray-800 text-white hover:bg-gray-900"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
