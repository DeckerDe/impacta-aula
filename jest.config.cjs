module.exports = {
  transform: {},
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['json-summary', 'text'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 100
    },
  },
};