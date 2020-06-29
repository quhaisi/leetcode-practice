// Sum of Digits / Digital Root
function digital_root(n) {
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  }
  return n;
}

function digital_root(n) {
  // https://blog.csdn.net/code_pang/article/details/8062296
  return (n - 1) % 9 + 1;
}

console.log(digital_root(16));
console.log(digital_root(456));
