import React from "react";

const ResultCard = ({ result }) => {
  const { title, url, overview, source } = result;
  return (
    <a href={url} target="blank">
      <div className="result-card shadow">
        <h3>{title}</h3>
        <p>{overview}</p>
        <span>{`Engine: ${source}`}</span>
      </div>
    </a>
  );
};

export default ResultCard;
