// Merged String Checker

function isMerge(s, part1, part2) {
  let part1Index = 0;
  let part2Index = 0;
  let sIndex = 0;
  for (sIndex; sIndex < s.length; sIndex++) {
    if (s[sIndex] === part1[part1Index]) {
      part1Index++;
    } else if (s[sIndex] === part2[part2Index]) {
      part2Index++;
    } else {
      break;
    }
  }
  return (
    sIndex === s.length &&
    part1Index === part1.length &&
    part2Index === part2.length
  );
}

console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(!isMerge('codewars', 'cod', 'wars'));
