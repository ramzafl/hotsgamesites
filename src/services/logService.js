//plug in a logging service here like sentry

function init() {}

function log(error) {
  console.error(error);
}

export default {
  init,
  log
};
