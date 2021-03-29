import React, { useEffect } from "react";
import "../assets/search.css";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";
import SearchForm from "../components/SearchForm";
import { getResults, setQuery, setEngines } from "../actions/index";
import ResultsContainer from "../components/ResultsContainer";

const Search = ({ results, getResults, setQuery, setEngines }) => {
  const location = useLocation();

  useEffect(() => {
    const params = queryString.parse(location.search, {
      arrayFormat: "bracket",
    });
    console.log(params);
    setQuery(params["q"]);
    setEngines(params["e"].length === 2 ? "both" : params["e"][0]);
  }, []);

  useEffect(() => {
    getResults(location.search);
  }, [location.search]);

  return (
    <div className="search-container">
      <div className="fixed-search">
        <SearchForm />
      </div>
      <div className="result-container">
        <ResultsContainer results={results} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

const mapDispatchToProps = {
  getResults,
  setQuery,
  setEngines,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
