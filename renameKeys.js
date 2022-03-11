//const { config } = require('./config');

function renameKeysRecursive(o) {

    const build = {};
    let key;
    let destKey;
    let exits;
    let value;
    
    if (o === null || typeof o !== 'object') {
      return o;
    }
  
    if (Array.isArray(o)) {
      //return o.map(renameKeysRecursive());
    }

    console.log('configa:', o);
  
    for (key in o) {
      const config = o[2];
      //console.log({ o })
      console.log(JSON.stringify(o))

      console.log('-->',config);

      exits = config.hasOwnProperty(key);
      destKey = exits === false ? key : config[key];

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