const age = parseInt(prompt("What is your age?"));

if (isNaN(age)) {
    console.log("This is not a number!");
}
else {
    console.log("Your age is " + age);
}
