function sumOfDifferences(arr) {
    let temp_sum = 0;
    let sum = 0
    let j = 1;
    if (arr.length === 1){
      return 0
    }
    for(let i=0;i<arr.length-1;i++){
      temp_sum = arr[i] - arr[j];
      sum = sum + temp_sum;
      j++
    }
    return Math.abs(sum);
  }