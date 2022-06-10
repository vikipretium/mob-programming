function sayHello(name, city, state) {
  let new_name = name.join(" ");
  return (
    "Hello, " + new_name + "!" + " Welcome to " + city + ", " + state + "!"
  );
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
