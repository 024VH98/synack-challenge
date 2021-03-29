import React from "react";
import "../assets/search.css";
import { useLocation } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import getSearchResults from "../hooks/getResultsSearch";
import RestultCard from "../components/ResultCard";

const Search = () => {
  const location = useLocation();
  const results = getSearchResults(location.search);
  if (results === undefined) return <>Loading...</>;
  if (results.length === 0) return <>No hay resultados</>;
  return (
    <div className="search-container">
      <div className="fixed-search">
        <SearchForm />
      </div>
      <div className="result-container">
        {results.map((result) => (
          <RestultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Search;
