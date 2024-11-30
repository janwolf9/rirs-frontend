module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!(axios)/)" // Transformiraj axios in njegove module
    ],
    moduleNameMapper: {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    coverageDirectory: "coverage",
  };
  