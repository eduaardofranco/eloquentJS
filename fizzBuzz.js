// Write a program to print all numbers from 1 to 100, with two exceptions.
// For number divisible by 3, print 'Fizz' instead and for numbers divisible
// for 5 (and not 3) print 'Buzz' instead.

for (let counter = 1; counter <= 100; counter++) {
  if ( counter % 3 == 0 ) {
    console.log('Fizz');
    if( counter % 5 == 0) {
      console.log('FizzBuzz')
    }
  }
  else if (counter % 5 == 0 && counter % 3 !== 0) {
    console.log('Buzz');
  }
  else {
    console.log(counter);
  }
}