module.exports = (...args) => {
  const obj = {};

  for (let i = 0; i < args.length; i++) {
    for (let key in args[i]) {
      /* istanbul ignore next */
      if (args[i].hasOwnProperty(key)) {
        obj[key] = args[i][key];
      }
    }
  }

  return obj;
};
