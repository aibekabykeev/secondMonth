const name = prompt('Как вас зовут?')
console.log('Hello ' + name)

let arr = [8, 6, 6, 8, 9,]
let arr2 = [3,]
if (arr.length < arr2.length){
    console.log('второй длиннее')
} else if (arr.length > arr2.length){
    console.log('первый длиннее')
} else{
    console.log('они равны')
}

let svetofor = prompt('цвет? (на английском)');

switch (svetofor) {
    case "green":
        console.log('зеленый');
        break;
    case "yellow":
        console.log('желтый');
        break;
    case "red":
        console.log('красный');
        break;
    default:
        console.log('default');
}

