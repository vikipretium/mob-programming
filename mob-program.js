function findLongestWordLength(str) {
  let words = str.split(' ');
  console.log(words);
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    if (max < words[i].length) {
      max = words[i].length;
    }
  }
  console.log(max);
  return max;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
