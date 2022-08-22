const mergeSort = (array) => {
  if (array.length < 2) return array;
  else {
    let half = Math.ceil(array.length / 2);
    let firstHalf = array.slice(0, half);
    let secondHalf = array.slice(half);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
};

const merge = (firstArray, secondArray) => {
  let sorted = [];
  // loop through the sorted arrays to find the largest element
  while (firstArray.length > 0 && secondArray.length > 0) {
    firstArray[0] > secondArray[0]
      ? sorted.push(secondArray.shift())
      : sorted.push(firstArray.shift());
  }
  // return sorted array, concatenated with the leftover elements
  // in either firstArray or secondArray
  return [...sorted, ...firstArray, ...secondArray];
};

const unsorted1 = [93, 151, 3, 20, 463, 155, 167, 34, 13];
const unsorted2 = [-3, 0, 104, 10456, 4, 790, 90, -90];
const unsorted3 = [10, 4.5, 3.7, 1.1, 0.3, 9.99, 8, 4, 4.7];

console.log(mergeSort(unsorted1)); //[3, 13, 20, 34, 93, 151, 155, 167, 463]
console.log(mergeSort(unsorted2)); //[-90, -3, 0, 4, 90, 104, 790, 10456]
console.log(mergeSort(unsorted3)); //[0.3, 1.1, 3.7, 4, 4.5, 4.7, 8, 9.99, 10]
