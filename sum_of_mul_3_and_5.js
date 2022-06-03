function solution(number) {
  let sum = 0;
  if (number < 0) {
    return 0;
  } else {
    for (let i = 1; i < number; i++) {
      if ((i % 3 == 0) & (i % 5 == 0)) {
        //add number
        console.log(i);
        sum += i;
      } else if (i % 3 == 0) {
        console.log(i);
        sum += i;
      } else if (i % 5 == 0) {
        console.log(i);
        sum += i;
      }
    }
    return sum;
  }
}
console.log(solution(100));
