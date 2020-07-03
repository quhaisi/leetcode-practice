function wave(str) {
  return str
    .split("")
    .map((item, index) => {
      if (item) {
        let arr = str.split("");
        arr[index] = arr[index].toUpperCase();
        return arr.join("");
      }
    })
    .filter((item) => item !== str);
}

console.log(wave("hello world"));
