function fibs(num) {
  let seq = [0, 1];
  let a = 0;
  let b = 1;
  for (let i = 1; i < num; i++) {
    let c = a + b;
    seq.push(c);
    a = b;
    b = c;
  }
  return seq;
}

console.log(fibs(20));

function fibsRecursive(num) {
  if (num < 2) {
    return [1];
  }
  if (num < 3) {
    return [1, 1];
  }

  let a = fibsRecursive(num - 1);
  a.push(a[num - 2] + a[num - 3]);
  return a;
}

console.log(fibsRecursive(20));
