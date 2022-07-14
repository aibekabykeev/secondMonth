// const array = [
//     {
//         username:'aibek',
//         full:'abykeev aibek',
//     },
//     {
//         username:'aibek',
//         full:'abykeev aibek',
//     },
//     {
//         username:'aibek',
//         full:'abykeev aibek'
//     },
//     {
//         username:'aibek',
//         full:'abykeev aibek'
//     },
//     {
//         username:'aibek',
//         full:'abykeev aibek'
//     },
// ]
// // for (let i=0; i < array.length; i++){
// //     console.log(array[i])
// }
// for (let user of array){
//     console.log(user)
// }
// const obj ={
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
//
//
// }
// for (let key in obj){
//     console.log(obj[key])
// }
// while(i < 5){
//     console.log('hello')
// }
for ( i = 1; i <= 10000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 7 === 0){
      console.log('Kott')
  } else {
    console.log(i);
  }
}

