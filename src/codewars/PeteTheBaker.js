// Pete, the baker

function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((item) =>
      available[item] ? Math.floor(available[item] / recipe[item]) : 0
    )
  );
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
// must return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
