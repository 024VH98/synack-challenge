/* eslint-disable import/no-extraneous-dependencies */
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";

fetchMock.enableMocks();

afterEach(() => {
  jest.resetAllMocks();
  fetch.resetMocks();
});
