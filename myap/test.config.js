module.exports = {
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}",
      "!src/index.tsx", // Exclude files you don't want to cover
    ],
  };