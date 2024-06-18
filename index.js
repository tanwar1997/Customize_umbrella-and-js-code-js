function minPlanesToDestination(fuel) {
  const n = fuel.length;
  if (n === 1) {
    return 0;
  }

  let planesHired = 0;
  let current = 0;
  let next = 0;
  let maxReach = 0;

  while (current < n - 1) {
    maxReach = Math.max(maxReach, current + fuel[current]);

    if (current === next) {
      if (current === maxReach) {
        return -1;
      }
      planesHired++;
      next = maxReach;
    }

    current++;
  }

  return planesHired;
}

// Example usage
console.log(minPlanesToDestination([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToDestination([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
