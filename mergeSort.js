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
      ? sorted.push(secondArray.slice(1))
      : sorted.push(firstArray.slice(1));
  }

  return sorted;
};

const unsorted = [93, 151, 3, 20, 463, 155, 167, 34, 13];

console.log(mergeSort(unsorted));
