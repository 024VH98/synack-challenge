import React from "react";
import RestultCard from "./ResultCard";
import Spinner from "./Spinner";

const ResultsContainer = ({ results }) => {
  if (results === undefined) return <Spinner />;
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
