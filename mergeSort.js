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
  while (firstArray.length > 0 && secondArray.length > 0) {
    firstArray[0] > secondArray[0]
      ? sorted.push(secondArray.shift())
      : sorted.push(firstArray.shift());
  }
  while (firstArray.length > 0) {
    sorted.push(firstArray.shift());
  }
  while (secondArray.length > 0) {
    sorted.push(secondArray.shift());
  }
  return sorted;
};

const unsorted1 = [93, 151, 3, 20, 463, 155, 167, 34, 13];
const unsorted2 = [-3, 0, 104, 10456, 4, 790, 90, -90];
const unsorted3 = [10, 4.5, 3.7, 1.1, 0.3, 9.99, 8, 4, 4.7];

console.log(mergeSort(unsorted1));
console.log(mergeSort(unsorted2));
console.log(mergeSort(unsorted3));
