module.exports = {
  collectCoverageFrom: ["<rootDir>/app/javascript/**/*.{js,jsx}"],
  setupFilesAfterEnv: ["<rootDir>/app/javascript/setup-tests.js"],
  globalSetup: "<rootDir>/app/javascript/global-setup.js",
  roots: ["<rootDir>/app/javascript"],
};
