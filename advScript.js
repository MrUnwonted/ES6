// Spread Operator

// const globalPlayer ={
//     id:0,
//     name:"Bot",
//     powerLevel:100,
// }


// const player1 = {...globalPlayer,powerLevel:2}
// // player1.powerLevel=50
// console.log(player1);

// console.log(globalPlayer);

// const globalPlayer1 = ['Arjun','Joel']
// const globalPlayer2 = ['Althuaf']

// const players =  [...globalPlayer1,'and', ...globalPlayer2]
// console.log(players)

// Rest Operator

// const globalPlayer1 = ['Arjun','Joel']

// const [first,second] = globalPlayer1

// console.log(first);


// const globalPlayer = {
//     id:0,
//     names:'Master Splinter',
//     age:20
// }

// const{id,...end} = globalPlayer

// console.log(id);
// console.log(end);

// Arrow
// const addNumbers = (a,b)=> a+b;
// console.log(addNumbers(3,4));

// const multiplyNumbers = (x,y) => y*x;
// console.log(multiplyNumbers(3,4))

// const objFunc = ()=> ({name:"John",age:36});
// console.log(objFunc());

// const arrFunc = ()=>[1,2,3];
// console.log(arrFunc())

// const  person = person => person + 5;
// console.log(person(5));


// ForEach
// const fruits = ["apple","banana","orange"];
// fruits.forEach((item,index) => {
//     console.log(`I like ${item}`);
// })

// const globalPlayer = [{
//         id:0,
//         names:'Master Splinter',
//         age:20
//     },
//     {
//         id:1,
//         names:'Master Restner',
//         age:22
//     },
//     {
//         id:3,
//         names:'Master Santner',
//         age:25
//     },
// ]

// for(let i =0; i<globalPlayer.length;i++){
//     console.log(globalPlayer[i])
// }

// globalPlayer.forEach((value) => console.log(value.names))

// MAP
// const globalPlayer = [{
//     id:0,
//     names:'Master Splinter',
//     age:20
// },
// {
//     id:1,
//     names:'Master Restner',
//     age:22
// },
// {
//     id:3,
//     names:'Master Santner',
//     age:25
// },
// ]
// const newArray =  globalPlayer.map(value => 
//     value.names +',' + 'age:' + value.age)
// console.log(newArray);

// Filter
// const globalPlayer = [{
//     id:0,
//     names:'Master Splinter',
//     age:20
// },
// {
//     id:1,
//     names:'Master Restner',
//     age:22
// },
// {
//     id:3,
//     names:'Master Santner',
//     age:25
// },
// ]

// const newArray = globalPlayer.filter((value) =>
//  value.age ===20 && value.names ==='Master Splinter'
//  )
// console.log(newArray);

// Reduce
// const numberArray = [12,23,35,35,56,5]
// // let total =0

// const newArray = 
//     numberArray.reduce((total,value) => total+value,10)
//     console.log(newArray)


// Find
const globalPlayer = [{
        id:0,
        names:'Master Splinter',
        age:20
    },
    {
        id:1,
        names:'Master Restner',
        age:22
    },
    {
        id:3,
        names:'Master Santner',
        age:25
    },
    ]

    const newObj = globalPlayer.find((value) => value.names === 'Master Splinter')
    console.log(newObj);