const config = require('./config');

function renameKeys(o) {
  const build = {};
  let key = '';
  let destKey = '';
  let exists = '';
  let value = '';

  if (o === null || typeof o !== 'object') {
    return o;
  }

  if (Array.isArray(o)) {
    return o.map(renameKeys);
  }

  for (key in o) {
    exists = config.hasOwnProperty(key);
    destKey = exists === false ? key : config[key];

    value = o[key];

    if (typeof value === 'object') {
      value = renameKeys(value);
    }

    build[destKey] = value;
  }
  return build;
}

function MergeObjects(obj, config) {
  obj = obj.length == 0 ? {} : obj;
  let _obj= {};

  for (const prop in config) {
    const resp = obj.hasOwnProperty(prop);
    !resp ? (_obj[prop] = '') : (_obj = obj);
  }
  return _obj;
}

function ExitsKey(prop, obj) {
  const exists = prop === false ? {} : obj;
  return exists;
}

module.exports = {
  renameKeys,
  MergeObjects,
  ExitsKey
};

