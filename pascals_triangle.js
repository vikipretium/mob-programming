function pascal(depth) {
  //code here

  if (depth === 1) return [[1]];
  let res = [];
  for (let i = 1; i <= depth; i++) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        arr.push(1);
      } else {
        arr.push(res[i - 2][j - 1] + res[i - 2][j]);
      }
    }
    res.push(arr);
  }
  console.log(res);
  return res;
}

pascal(5);
