// The Supermarket Queue
function queueTime(customers, n) {
  const queue = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let minIndex = 0;
    let min = queue[0];
    for (let j = 0; j < queue.length; j++) {
      if (queue[j] <= min) {
        minIndex = j;
        min = queue[j];
      }
    }
    queue[minIndex] = queue[minIndex] + customers[i];
  }
  return Math.max(...queue);
}

console.log(queueTime([5, 3, 4], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));
