// Good vs Evil
function goodVsEvil(good, evil) {
  const goodValue = [1, 2, 3, 3, 4, 10];
  const evilValue = [1, 2, 2, 2, 3, 5, 10];
  const goodRe = good.split(" ").reduce((prev, curr, index) => {
    return prev + curr * goodValue[index];
  }, 0);
  const evilRe = evil.split(" ").reduce((prev, curr, index) => {
    return prev + curr * evilValue[index];
  }, 0);
  if (goodRe > evilRe) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodRe === evilRe) {
    return "Battle Result: No victor on this battle field";
  } else {
    return "Battle Result: Evil eradicates all trace of Good";
  }
}

console.log(
  goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1") ===
    "Battle Result: Evil eradicates all trace of Good"
);
console.log(
  goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0") ===
    "Battle Result: Good triumphs over Evil"
);
console.log(
  goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0") ===
    "Battle Result: No victor on this battle field"
);
