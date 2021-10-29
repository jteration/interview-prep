function triplet_with_smaller_sum_them(arr, target) {
  const iterations = { num: 0 };
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    iterations.num++;
    count += search_pair(arr, target - arr[i], i, iterations);
  }
  console.log(iterations.num);
  return count;
}

function search_pair(arr, target_sum, first, iterations) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    iterations.num++;
    if (arr[left] + arr[right] < target_sum) {
      // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}

const triplet_with_smaller_sum_me = function (arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  let iterations = 0;

  for (let left = 0; left < arr.length; left += 1) {
    iterations++;
    let middle = left + 1;
    let right = arr.length - 1;

    while (right > middle) {
      iterations++;
      const sum = arr[left] + arr[middle] + arr[right];

      if (sum < target) {
        count += right - middle + 1;
        break;
      } else {
        right -= 1;
      }
    }
  }
  console.log(iterations);
  return count;
};

triplet_with_smaller_sum_them([-1, 0, 2, 3], 3);
triplet_with_smaller_sum_them([-1, 4, 2, 1, 3], 5);
triplet_with_smaller_sum_me([-1, 0, 2, 3], 3);
triplet_with_smaller_sum_me([-1, 4, 2, 1, 3], 5);
