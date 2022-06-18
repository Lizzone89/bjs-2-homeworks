function compareArrays(arr1, arr2) {

  return result = ((arr1.length === arr2.length) && (arr1.every((item, idx) => item === arr2[idx])));
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((a) => a > 0).filter((a) => a % 3 === 0).map((a) => a * 10)

  return resultArr; // array
}
