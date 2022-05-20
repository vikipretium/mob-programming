function largestOfFour(arr) {
    // Math.max(array)
    let max_num = [];
    for (let i=0;i<arr.length;i++){
      //method 1
      // console.log(arr[i]);
      // let temp_arr = arr[i];
      // temp_arr.sort(function(a, b){return a-b});
      // console.log(temp_arr);
      // max_num.push(temp_arr[temp_arr.length - 1])
      // console.log(max_num)
  
      //method 2
      let temp_arr = arr[i];
      max_num.push(Math.max(...temp_arr));
      console.log(max_num);
  
    }
    return max_num;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);