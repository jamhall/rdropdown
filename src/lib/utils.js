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
    for(let o of options) {
      if (o === option) {
        return true;
      }
    }
    return false;
}
