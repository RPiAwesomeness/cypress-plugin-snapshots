const getTestTitle = require('./getTestTitle');

const SNAPSHOTS_IMAGE = {};

const SNAPSHOT_TITLES_IMAGE = [];

function snapshotTitleIsUsed(snapshotTitle) {
  return SNAPSHOT_TITLES_IMAGE.indexOf(snapshotTitle) !== -1;
}

function getSnapshotTitle(test, customName, customSeparator) {
  const name = customName || getTestTitle(test);
  const separator = customSeparator || ' #';
  const snapshots = SNAPSHOTS_IMAGE;

  if (snapshots[name] !== undefined) {
    snapshots[name] += 1;
  } else {
    snapshots[name] = 0;
  }

  const snapshotTitle = `${name}${separator}${snapshots[name]}`;
  SNAPSHOT_TITLES_IMAGE.push(snapshotTitle);
  return snapshotTitle;
}

module.exports = {
  getSnapshotTitle,
  snapshotTitleIsUsed
};
