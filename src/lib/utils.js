export function findIndexForOption(options, option) {
    if(Array.isArray(options)) {
      for (let index = 0; index <= options.length; index++) {
        if(options[index] === option) {
          return index;
        }
      }
    }
    return -1;
}

export function optionExists(options, option) {
    const deepEqual = (x,y) => {
      return (x && y && typeof x === 'object' && typeof y === 'object') ?
        (Object.keys(x).length === Object.keys(y).length) &&
          Object.keys(x).reduce(function(isEqual, key) {
            return isEqual && deepEqual(x[key], y[key]);
          }, true) : (x === y);
    }
    for(let o of options) {
      if (deepEqual(o, option)) {
        return true;
      }
    }
    return false;
}
