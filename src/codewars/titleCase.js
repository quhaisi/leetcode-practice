function titleCase(title, minorWords) {
  if (!title) return "";
  const excludes = minorWords ? minorWords.toLowerCase().split(" ") : [];
  return title
    .toLowerCase()
    .split(" ")
    .map((item, index) => {
      if (index !== 0 && excludes.includes(item)) {
        return item;
      }
      return item.replace(/^\w/, (m) => m.toUpperCase());
    })
    .join(" ");
}

console.log(titleCase(""));
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
