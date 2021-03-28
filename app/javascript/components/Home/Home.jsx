import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return <h1>Homepage</h1>;
};

export default Home;
