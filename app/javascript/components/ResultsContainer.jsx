import React from "react";
import RestultCard from "./ResultCard";

const ResultsContainer = ({ results }) => {
  if (results === undefined) return <>Loading...</>;
  if (results.length === 0) return <>No hay resultados</>;
  return (
    <>
      {results.map((result) => (
        <RestultCard key={result.id} result={result} />
      ))}
    </>
  );
};

export default ResultsContainer;
