let zvezda = "*"

while (zvezda.length <=7){
  console.log(zvezda);
  zvezda += "*"
}



for (let  i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log(i, 'FizzBuzz');
  } else if (i % 3 === 0) {
    console.log(i, 'Fizz');
  } else if (i % 5 === 0) {
    console.log(i, 'Buzz');
  } else if (i % 7 === 0) {
    console.log(i, 'Kott');
  } else {
    console.log(i);
  }
}

