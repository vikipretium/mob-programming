function sameCase(a, b) {
  //check a,b is a char
  // console.log(typeof a);
  // console.log(typeof a == "string" && typeof b == "string");
  // console.log(a.toLowerCase() == a);
  // console.log(b.toUpperCase() == b);
  // console.log(a.toLowerCase() == a && b.toUpperCase() == b);

  // console.log(65 <= a.charCodeAt(0) <= 122 && 65 <= b.charCodeAt(0) <= 122);
  // console.log(a.charCodeAt(0));

  // console.log(a.toUpperCase() == a && b.toUpperCase() == b) ||
  //   (a.toLowerCase() == a && b.toLowerCase() == b);

  console.log("entering program");
  const lettersNumbers = /^[A-Za-z]*$/;

  if (lettersNumbers.test(a) && lettersNumbers.test(b)) {
    console.log("inside if statement a and b is string");
    if (
      (a.toUpperCase() == a && b.toUpperCase() == b) ||
      (a.toLowerCase() == a && b.toLowerCase() == b)
    ) {
      console.log("match cases");
    } else {
      console.log("not matched cases");
    }
  } else console.log("numbers and symbols and spaces");
  return 0;
}

sameCase("5", "A");
