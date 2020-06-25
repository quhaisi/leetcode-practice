function toCamelCase(str) {
  return str
    .split(/-|_/)
    .map((item, index) => {
      if (index === 0) return item;
      return item[0].toUpperCase() + item.substring(1);
    })
    .join("");
}

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase(""));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("A-B-C"));
