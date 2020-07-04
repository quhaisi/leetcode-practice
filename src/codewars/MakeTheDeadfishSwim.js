// Make the Deadfish swim

// Return the output array, and ignore all non-op characters
function parse(data) {
  let arr = [];
  data.split("").reduce((prev, curr) => {
    switch (curr) {
      case "i":
        prev++;
        break;
      case "d":
        prev--;
        break;
      case "s":
        prev = prev * prev;
        break;
      case "o":
        arr.push(prev);
        break;
      default:
    }
    return prev;
  }, 0);
  return arr;
}

console.log(parse("iiisdoso"));
