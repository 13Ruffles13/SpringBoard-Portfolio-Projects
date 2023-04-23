//1. Repeat
function repeat(str, multipler) {
  let container = "";
  while (multipler !== 0) {
    container += str;
    multipler--;
  }
  return container;
}

//2. removeFromString
function removeFromString(str, index, count) {
  /*
        Accepts a str && starting index[number]
        Then, a count[number] of how many counters to remove
        Return a new string with the chars removed
    */
  let deleteTracker = str.slice(index, count); //Slice the garbage chars
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (deleteTracker[i] === str[i]) {
      //do not store continue
      continue;
    }
    if (i < index) {
      newStr += str[i]; //Store until location is reached
      continue;
    }
    if (index === count) {
      break; //If index and counter is same location we have achieved dest.
    }
    newStr += str[i];
  }
  return newStr;
}

//3. reverse
function reverse(arr) {
  //Cannot create a new array
  let index = 0;
  let lastIndex = arr.length - 1;
  for (; index < arr.length / 2; index++) {
    //Divide by the length by two until reaching the middle.
    let tempValue = arr[index];
    arr[index] = arr[lastIndex];
    arr[lastIndex] = tempValue;
    lastIndex--;
  }
  return arr;
}

//4. min
function min(arr) {
  //Return the lowest value
  let lowestVal = 0;
  let indexJ = 1;
  for (let indexI = 0; indexI <= arr.length; ) {
    console.log(arr[indexI] + "| arrIndexI");
    console.log(arr[indexJ] + "| arrIndexJ");
    if (arr[indexI] <= arr[indexJ]) {
      indexJ++;
      console.log("Position J updated: " + indexJ);
      if (arr[indexJ] === undefined) {
        console.log("LOWEST VAL FOUND!");
        lowestVal = arr[indexI];
        break;
      }
    } else {
      indexI = indexJ;
      console.log("Position I updated: " + indexI);
      indexJ++;
    }
  }
}
// 5. slice
function slice(arr, index, len) {
  let arrSlice = [];
  let arrIndex = 0;
  console.log("Starting index " + index);
  console.log("Length of slice " + len);
  for (; index <= arr.length - 1; index++) {
    if (index < len) {
      console.log("Adding! " + arr[index]);
      arrSlice[arrIndex] = arr[index];
      console.log("Array values " + arrSlice[index]);
      arrIndex++;
    }
  }
  return arrSlice;
}

// 6. keys
function keys(json) {
  var obj = JSON.parse(json);
  let stringArr = [];
  for (let findKey in obj) {
    stringArr.push(findKey);
    console.log(stringArr + " KEY FOUND!");
  }
  return stringArr;
}

// 7. values
function values(json) {
  var obj = JSON.parse(json);
  let stringVals = [];
  for (let findVals in obj) {
    stringVals.push(obj[findVals]);
    console.log(`Values: ` + stringVals);
  }
  return stringVals;
}

// 8. swapKeyAndValue
function swapKeyAndValue(json, swapKey) {
  var obj = JSON.parse(json); //Original key : value
  let newObj = {};
  for (let keys in obj) {
    newObj[keys] = obj[keys];
    if (keys === swapKey) {
      newObj[obj[keys]] = swapKey; //newObject[oldObject[oldValProp]] = swapKey
      delete newObj[keys]; //Delete oldKey
    }
  }

  return JSON.stringify(newObj); //Swapped value : key
}
// 9. multiples
function multiples(x, n) {
  //X will never be a negative number
  const arrMultiples = [];
  while (n !== 0) {
    arrMultiples.push(x * n); //3 * 4 = 12 etc...
    n--;
  }
  arrMultiples.reverse();
  return arrMultiples;
}

// 10. pluck
function pluck(json, value) {
  var obj = JSON.parse(json);
  let newArryVals = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].hasOwnProperty(value)) {
      newArryVals.push(obj[i][value]); //arr(obj[location][value])
    } else {
      newArryVals.push(-1);
    }
  }
  return newArryVals;
}

// 11. twoHighest
function twoHighest(arr) {
  //Returns the two highest numbers within the array
  let twoResults = []; //second, first
  let firstHighest = 0;
  let secondHighest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= firstHighest) {
      secondHighest = firstHighest;
      firstHighest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] !== firstHighest) {
      secondHighest = arr[i];
    }
  }
  twoResults.push(secondHighest, firstHighest);
  return twoResults;
}

// 12.	minMaxKeyInObject
function minMaxKeyInObject(json) {
  var obj = JSON.parse(json);
  let minKey = Object.keys(obj)[0];
  let maxKey = Object.keys(obj)[0];
  for (const key in obj) {
    let keyInt = +key;
    if (keyInt > maxKey) {
      maxKey = keyInt;
    }
    if (keyInt < minKey) {
      minKey = keyInt;
    }
  }
  return [minKey, maxKey];
}

// 13. stringFromObject
function stringFromObject(json) {
  var obj = JSON.parse(json);
  let stringObj = "";
  for (let i in obj) {
    stringObj += i + " = " + obj[i] + ", ";
  }
  stringObj = stringObj.slice(0, stringObj.length - 2);
  return stringObj;
}

// 14. countNumbers
function countNumbers(arr) {
  //Filter creates a shallow copy of the array.
  //isFinite determines whether the passed value is a finite number
  return arr.filter(isFinite).length;
}
