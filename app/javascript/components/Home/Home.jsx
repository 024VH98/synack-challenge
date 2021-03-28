import React, { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Home";
  });

  return (
    <h1>This is the homapage</h1>
  );
};

export default Home;
