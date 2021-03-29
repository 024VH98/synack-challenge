import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { setQuery, setEngines } from "../actions/index";
import Button from "./buttons/Button";
import Select from "./inputs/Select";
import TextInput from "./inputs/TextInput";
import Title from "./typography/Title";

const ENGINE_VALUES = {
  google: ["google"],
  bing: ["bing"],
  both: ["google", "bing"],
};

const ENGINE_OPTIONS = [
  { value: "google", title: "Google" },
  { value: "bing", title: "Bing" },
  { value: "both", title: "Google and Bing" },
];

const SearchForm = ({ query, engines, setQuery, setEngines }) => {
  const history = useHistory();

  const handleOnQueryChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleOnEnginesChange = (e) => {
    e.preventDefault();
    setEngines(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = {
      e: ENGINE_VALUES[engines],
      q: query,
    };
    const queryStringify = queryString.stringify(queryParams, {
      arrayFormat: "bracket",
    });
    history.push(`/search?${queryStringify}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search-form">
        <Title>Search Engine</Title>
        <TextInput
          htmlFor="query"
          value={query}
          onChange={handleOnQueryChange}
          required
        />
        <Select
          label="Select Engine"
          htmlFor="engine"
          options={ENGINE_OPTIONS}
          value={engines}
          onChange={handleOnEnginesChange}
          required
        />
        <Button type="submit" />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query,
    engines: state.engines,
  };
};

const mapDispatchToProps = {
  setQuery,
  setEngines,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
