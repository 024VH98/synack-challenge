import React from "react";
import { render, screen } from "@testing-library/react";
import ResultCard from "./ResultCard";

const result = {
  title: "This is the title",
  url: "www.google.com",
  overview: "This is the overview",
  source: "google",
};

describe(ResultCard, () => {
  it("should render the result", async () => {
    render(<ResultCard result={result} />);
    expect(await screen.findByText(result.title)).toBeInTheDocument();
    expect(await screen.findByText(result.overview)).toBeInTheDocument();
    expect(
      await screen.findByText(`Engine: ${result.source}`),
    ).toBeInTheDocument();
  });
});
