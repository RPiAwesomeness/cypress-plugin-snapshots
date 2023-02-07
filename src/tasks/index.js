const {
  GET_FILE,
  MATCH_IMAGE,
} = require('./taskNames');
const getFile = require('./getFile');
const matchImageSnapshot = require('./matchImageSnapshot');

module.exports = {
  [GET_FILE]: getFile,
  [MATCH_IMAGE]: matchImageSnapshot,
};
