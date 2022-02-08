const config = require('./config');

function renameKey(o) {

    const build = {};
    let key;
    let destKey;
    let exits;
    let value;
    
    if (o === null || typeof o !== 'object') {
      return o;
    }
  
    if (Array.isArray(o)) {
      return o.map(renameKey);
    }
  
    for (key in o) {
      exits = config.hasOwnProperty(key);
      destKey = exits === false ? key : config[key];

      value = o[key];
  
      if (typeof value === 'object') {
        value = renameKey(value);
      }
  
      build[destKey] = value;
    }
    return build;
  }

  module.exports = {
      renameKey
  };