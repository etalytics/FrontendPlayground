const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  reporters: ['default', ['jest-ctrf-json-reporter', {}]],
};
