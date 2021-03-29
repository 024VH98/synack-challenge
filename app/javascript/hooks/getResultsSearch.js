import { useState, useEffect } from "react";

const getSearchResults = (query) => {
  const [results, setResults] = useState(undefined);

  useEffect(() => {
    fetch(`/api/search${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.data));
  }, []);

  return results;
};
export default getSearchResults;
