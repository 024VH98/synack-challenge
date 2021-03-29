import React, { useRef } from "react";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
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

const SearchForm = () => {
  const history = useHistory();
  const queryRef = useRef(null);
  const engineRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = {
      e: ENGINE_VALUES[engineRef.current.value],
      q: queryRef.current.value,
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
        <TextInput htmlFor="query" ref={queryRef} required />
        <Select
          label="Select Engine"
          htmlFor="engine"
          ref={engineRef}
          options={ENGINE_OPTIONS}
          required
        />
        <Button type="submit" />
      </div>
    </form>
  );
};

export default SearchForm;
