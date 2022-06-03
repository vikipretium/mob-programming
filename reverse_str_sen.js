"The quick brown fox jumps over the lazy dog.",
  "ehT kciuq nworb xof spmuj revo eht yzal .god";

function reverseWords(str) {
  let arr1 = str.split(" ");
  let arr2 = [];
  arr1.forEach((element) => {
    arr2.push(element.split("").reverse().join(""));
    console.log(arr2);
  });

  let string1 = arr2.toString();

  string1 = string1.split(",").join(" ");

  console.log(string1);
  return string1;
}
reverseWords("The quick brown fox jumps over the lazy dog.");
