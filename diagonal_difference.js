function diagonalDifference(arr) {
  // Write your code here
  //Need find the first diagonal sum
  // [i,j] => [i+1,j+1]
  let first_sum = 0;
  let second_sum = 0;
  //let second_jterm=arr[0].length;

  let j_term = 0;
  for (let i = 0; i < arr.length; i++) {
    first_sum += arr[i][j_term];
    second_sum += arr[arr.length - 1 - i][j_term];
    j_term++;
  }

  return Math.abs(first_sum - second_sum);
}
