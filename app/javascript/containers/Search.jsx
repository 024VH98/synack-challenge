import React from "react";
import { useLocation } from "react-router-dom";
import getSearchResults from "../hooks/getResultsSearch";

const Search = () => {
  const location = useLocation();
  const results = getSearchResults(location.search);
  if (results === undefined) return <>Loading...</>;
  if (results.length === 0) return <>No hay resultados</>;
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Search;
