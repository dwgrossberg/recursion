function sumTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumTo(1000));

function sumToRecursive(n) {
  if (n === 1) return 1;
  else {
    return n + sumToRecursive(n - 1);
  }
}

console.log(sumToRecursive(1000));

function arithmeticProgression(n) {
  return ((n + 1) * n) / 2;
}

console.log(arithmeticProgression(1000));

function factorialRecursive(n) {
  return n === 1 ? 1 : n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));

function fibRecursive(n) {
  return n <= 1 ? n : fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log(fibRecursive(5));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

printReverseList(list);

function collatz(n) {
  if (n === 1) return 0;
  else if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
}

console.log(collatz(101));

function sumRangeRecursive(n) {
  return n === 1 ? 1 : n + sumRangeRecursive(n - 1);
}

console.log(sumRangeRecursive(100));

function power(base, exp) {
  if (exp === 0) return 1;
  else {
    return base * power(base, exp - 1);
  }
}

console.log(power(4, 6));

function factRec(n) {
  return n === 1 ? 1 : n * factRec(n - 1);
}

console.log(factRec(16));

let allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven);

function all(array, callback) {
  var copy = copy || array.slice();

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

function productOfArray(array) {
  if (array.length === 0) return 1;
  else return array.shift() * productOfArray(array);
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log(six, sixty);

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, val) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], val);
    }
    if (obj[key] === val) {
      return true;
    }
  }
  return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt, doesntHaveIt);

function totalIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

console.log(seven);

function sumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += sumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

var l = [1, 2, 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

var l = [[1, 2], 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

var l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l)); // 1 = 1

var l = [10, [[10], 10], [10]];
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

function replicate(times, num) {
  if (times <= 0) return [];
  return [num].concat(replicate(times - 1, num));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
