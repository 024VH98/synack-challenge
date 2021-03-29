import React from "react";

const RestultCard = ({ result }) => {
  const { title, url, overview, source } = result;
  return (
    <a href={url}>
      <div className="result-card shadow">
        <h3>{title}</h3>
        <p>{overview}</p>
        <span>{`Engine: ${source}`}</span>
      </div>
    </a>
  );
};

export default RestultCard;
