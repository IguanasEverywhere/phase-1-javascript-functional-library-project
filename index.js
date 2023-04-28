function myEach(collection, cb) {
  if (!Array.isArray(collection)) {
    for (let i = 0; i < Object.values(collection).length; i++) {
      cb(Object.values(collection)[i]);
    }
  } else {
    for (let j = 0; j < collection.length; j++) {
      cb(collection[j]);
    }
  }
  return collection;
}



function myMap(collection, cb) {
  // only one loop this time by determining type of collection at outset
  let transformedArr = [];
  let valuesToIterate = !Array.isArray(collection) ? Object.values(collection) : collection;

  for (let i = 0; i < valuesToIterate.length; i++) {
    transformedArr.push(cb(valuesToIterate[i]));
  }
  return transformedArr;
}



function myReduce(collection, cb, acc) {
  let valuesToIterate = !Array.isArray(collection) ? Object.values(collection) : collection;
  let startIteration = 0;
  if (!acc) {
    acc = valuesToIterate[0];
    startIteration = 1;
  }

  for (let i = startIteration; i < valuesToIterate.length; i++) {
    acc = cb(acc, valuesToIterate[i], collection);
  }

  return acc;
}

function myFind(collection, predicate) {
  let valuesToIterate = !Array.isArray(collection) ? Object.values(collection) : collection;
  for (let i = 0; i < valuesToIterate.length; i++) {
    if (predicate(valuesToIterate[i]) === true) {
      return valuesToIterate[i];
    }
  }
}

function myFilter(collection, predicate) {
  let filteredArr = [];
  let valuesToIterate = !Array.isArray(collection) ? Object.values(collection) : collection;
  for (let i = 0; i < valuesToIterate.length; i++) {
    if (predicate(valuesToIterate[i]) === true) {
      filteredArr.push(valuesToIterate[i]);
    }
  }
  return filteredArr;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
  let firstNElems = [];
  if (n) {
    for (let i = 0; i < n; i++) {
      firstNElems.push(array[i]);
    }
  } else {
    return array[0];
  }
  return firstNElems;
}

function myLast(array, n) {
  let lastNElems = [];
  if (n) {
    for (let i = array.length - n; i < array.length; i++) {
      lastNElems.push(array[i]);
    }
  } else {
    return array[array.length - 1];
  }
  return lastNElems;
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}

function mySortBy(array, callback) {
  // may come back and implement my own sorting

  let sortedArr = [];
  for (let i = 0; i < array.length; i++) {
    sortedArr.push(array[i]);
  }
  sortedArr.sort(compareFn);

  function compareFn(a, b) {
    if (callback(a) < callback(b)) {
      return -1;
    }
    if (callback(a) > callback(b)) {
      return 1;
    }
    if (callback(a) === callback(b)) {
      return 0;
    }
  }

  return sortedArr;

}

function myFlatten(array, isShallow, newArr=[]) {
  if (isShallow === true) {
    for (let j = 0; j < array.length; j++) {
      if (Array.isArray(array[j])) {
        for (let k = 0; k < array[j].length; k++) {
          newArr.push(array[j][k]);
        }
      } else {
        newArr.push(array[j])
      }
    }
    return newArr;
  }

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      myFlatten(array[i], isShallow, newArr);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}


