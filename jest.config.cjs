module.exports = {
  // Minimal Jest config for ESM tests (package.json "type": "module" + node experimental vm modules used to run jest)
  transform: {},
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['json-summary', 'text'],
  coverageThreshold: {
    global: {
      statements: 91,
      branches: 91,
    },
  },
};
