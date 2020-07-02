function tripledouble(num1, num2) {
  let match = (num1 + "").match(/([\d])\1\1/g);
  if (!match) return 0;
  let flag = 0;
  for (let val of match) {
    if ((num2 + "").includes(val[0] + "" + val[0])) {
      flag = 1;
      break;
    }
  }
  return flag;
}

console.log(tripledouble(4519992777, 411772289));
console.log(tripledouble(1222345, 12345));
console.log(tripledouble(12345, 12345));
console.log(tripledouble(666789, 12345667));
console.log(tripledouble(10560002, 100));
console.log(tripledouble(1112, 122));
