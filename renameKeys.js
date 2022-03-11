//const { config } = require('./config');

  function renameKeysRecursive(o) {
    const build = {};
    let key;
    let destKey;
    let exists;
    let value;
  
    if (o === null || typeof o !== 'object') {
      return o;
    }
  
    if (Array.isArray(o)) {
      return o.map(renameKeysRecursive);
    }
  
    for (key in o) {

      console.log(global.config)
      exists = global.config.hasOwnProperty(key);
      destKey = exists === false ? key : global.config[key];
  
      value = o[key];
  
      if (typeof value === 'object') {
        value = renameKeysRecursive(value);
      }
  
      build[destKey] = value;
    }
    return build;
  }

  module.exports = {
    renameKeysRecursive
  };