// Merged String Checker

function isMerge(s, part1, part2) {
  let part1Slow = 0;
  let part1Fast = 0;
  let part2Slow = 0;
  let part2Fast = 0;
  let sIndex = 0;
  for (sIndex; sIndex < s.length; sIndex++) {
    if(s[sIndex] === part1[part1Fast] && s[sIndex] === part2[part2Fast]) {
      part1Fast++
      part2Fast++
    } else if(s[sIndex] === part1[part1Fast] && s[sIndex] !== part2[part2Fast]){
      part1Fast++
      part1Slow = part1Fast
      part2Fast = part2Slow
    } else if(s[sIndex] !== part1[part1Fast] && s[sIndex] === part2[part2Fast]){
      part2Fast++
      part2Slow = part2Fast
      part1Fast = part1Slow
    } else {
      break;
    }
  }
  console.log(sIndex, s.length)
  console.log(part1Slow, part1.length)
  console.log(part2Slow, part2.length)
  return (
    sIndex === s.length &&
    part1Slow === part1.length &&
    part2Slow === part2.length
  );
}

// 最后看的答案
function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

// console.log(isMerge('codewars', 'code', 'wars'));
// console.log(isMerge('codewars', 'cdw', 'oears')); 
// console.log(!isMerge('codewars', 'cod', 'wars'));
// console.log(isMerge('Y:B&Jb-Th[o(SX_>*Ys>-M4$/9D=', 'YB[(S>Ys-4D=', ':&Jb-ThoX_*>M$/9'));
// console.log(isMerge('yi[yi0X)NX', 'yi0', 'yi[X)NX'));
// console.log(isMerge('#(@sqPVFEQ', '(@VF', '#sqPEQ'));
console.log(isMerge("T2Ak@0;>[g33EE6'?sR:", 'T0;g3E6R:', "2Ak@>[3E'?s"));

