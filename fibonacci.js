function fibs(num) {
  let seq = [0, 1];
  let a = 0;
  let b = 1;
  for (let i = 2; i < num; i++) {
    let c = a + b;
    seq.push(c);
    a = b;
    b = c;
  }
  return seq;
}

console.log(fibs(20));

function fibsRecursive(num) {
  if (num <= 2) {
    return [0, 1];
  }
  let a = fibsRecursive(num);
  a.push(a[num - 1] + a[num - 2]);
  return a;
}

console.log(fibsRecursive(20));
