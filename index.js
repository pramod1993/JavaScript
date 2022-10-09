// console.log(Hello);

// const { string } = require("prop-types");




// for(var num = 1; num <= 10; num++){
//     var tableOf =12;
//     console.log(tableOf + '*' + num + '=' + tableOf * num);
// }



// var myFreands= ["Pramod", "Subodh", "suman", "Anjali", "Rekha", "Roshni", "Ansh", "Anvit", "Susthu"];
// // console.log(myFreands[ 3 ]);
// console.log(myFreands.length - 1);




// var myFreands= ["Pramod", "Subodh", "suman", "Anjali", "Rekha", "Roshni", "Ansh", "Anvit", "Susthu"];

// for( var i=0; i< myFreands.length; i++){
//     console.log(myFreands[i]);
// }





// var myFreands= ["Pramod", "Subodh", "suman", "Anjali", "Rekha", "Roshni", "Ansh", "Anvit", "Susthu"];

// for( let elements in myFreands){
//     console.log(elements);
// }
// for( let elements of myFreands){
//     console.log(elements);
// }


// var myFreands= ["Pramod", "Subodh", "suman", "Anjali", "Rekha", "Roshni", "Ansh", "Anvit", "Susthu"];

// myFreands.forEach(function (element, index, array){
//     console.log(element + "  index : "  + index + "  " + array);
// });
// myFreands.forEach((element, index, array)=> {
//     console.log(element + "  index : "  + index + "  " + array);
// });




// var myFreandsName= ["Pramod", "Subodh", "suman", "Anjali", "Rekha", "Roshni", "Ansh", "Anvit", "Susthu"];




// const animals = ['pramod singh', 'suman singh', 'sleep'];

// // const count = animals.push('chicken');
// // console.log(animals);
// // console.log(count);


// animals.push('chicken', 'cow', 'memna');
// console.log(animals);





// const animals = ['pramod singh', 'suman singh', 'sleep'];

// // const count = animals.unshift('chicken');
// // console.log(animals);
// // console.log(count);


// animals.unshift('chicken', 'cow', 'memna');
// console.log(animals);



// const myNumber = [1,2,3,5];
// myNumber.unshift(4,6);
// console.log(myNumber);




// const plant =['aam', 'emali', 'katahar', 'papaya',];
// console.log(plant);
// console.log(plant.pop());
// console.log(plant);



// const plant =['aam', 'emali', 'katahar', 'papaya',];
// console.log(plant);
// console.log(plant.shift());
// console.log(plant);


// const manth = ['jan', 'march', 'april', 'jun', 'july'];
// sil1

// const newManth= manth.splice(5,0, 'dec');
// const newManth= manth.splice(manth.length,0, 'dec');
// console.log(manth);

// sol2
// const newManth= manth.splice(manth.length,0, 'dec');
// console.log(newManth);

// sol3

// const manth = ['jan', 'march', 'april', 'jun', 'july'];

// const indexofManth = manth.indexOf('Jun');
// if(indexofManth !== -1){
//     const updetManth = manth.splice(indexofManth,1, 'jun');
//     console.log(manth);
// }else{
//     console.log('no such deta fund');
// }


// const manth = ['jan', 'march', 'april', 'Jun', 'july'];

// const indexofManth = manth.indexOf('april');
// if(indexofManth != -1){
//     const updetManth = manth.splice(indexofManth,Infinity);
//     console.log(manth);
//     console.log(updetManth);
// }else{
//     console.log('no such deta fund');
// }

// const updetManth = manth.splice(1,1, 'March');
// console.log(manth);





// const array = [1, 4, 9, 16, 25];


// let newArr = array.map((curElem,index,arr) => {
//     return curElem > 9;
// });
// console.log(array);
// console.log(newArr);

// const array = [1, 4, 9, 16, 25];
// let newArr = array.map((curElem,index,arr) => {
//     return `index no = ${index} and the value is ${curElem} belong to  ${arr}`;
// });
// console.log(newArr);


// const array = [1, 4, 9, 16, 25];
// let newArrfor = array.forEach((curElem,index,arr) => {
//     return `index no = ${index} and the value is ${curElem} belong to  ${arr}`;
// });
// console.log(newArrfor);



// sol1

// let arr = [25, 36, 49, 64, 81];



// let arrSkel = arr.map((curElem) =>Math.sqrt (curElem));
// console.log(arrSkel);

// sol2

// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElem) => {
//     return curElem * 2;
// }).filter((curElem) => {
//     return curElem > 10;
// })
// console.log(arr2);









// let arr = [5, 6, 2];

// // let sum = arr.reduce((accumulator , curElem, index, arr) => {
// //     return accumulator *= curElem;
// // })
// // console.log(sum);

// let sum = arr.reduce((accumulator , curElem) => {
//     debugger;
//     return accumulator += curElem;
// },7)
// console.log(sum);






// const arr = [
//     ['Zoon_1', 'Zoon_2'],
//     ['Zoon_3', 'Zoon_4'],
//     ['Zoon_5', 'Zoon_6'],
//     ['Zoon_7', 'Zoon_8']
// ]

// let faltarr = arr.reduce((accum, curvalue) => {
//     return accum.concat(curvalue);
// })
// console.log(faltarr);









// let mayName = "Pramod Singh";
// let mayChannelName = 'pramod singh';

// let yeName = new String ("Pramod Suman");

// console.log(mayName);
// console.log((yeName));






// let myName = 'Pramod Suman';
// console.log(myName.length);





// sol1

// let anySentence = 'we are the so-called\' viking \'from the north.';
// console.log(anySentence);

// sol2
// let anySentence = 'we are the so-called "viking" from the north.';
// console.log(anySentence);






// let myBioDate = 'I am The Pramod & Suman';
// console.log(myBioDate.indexOf('Pramod'));










// let myBioDate = 'I am The Pramod & Suman';
// console.log(myBioDate.lastIndexOf('T', 6));








// let myBioDate = 'I am The Pramod & Suman';

// let sDate = myBioDate.search('Pramod');
// console.log(sDate);







// demo exampale

// Slice(Start, end)
// SubStrings(Start, end)
// SubStr( Start, lenth)



// var str = 'Apple, Bananaa, kwin, papaya';

// // let res = str.slice(0,4) ;
// let res = str.slice(7,-2) ;
// console.log(res);









// let myTweest= 'In the example above are two enclosed statements using curly brackets. The first group is the do loop that continues to increase the value of the $value variable up to 100. In that group is the if statement for checking if $value is greater than or equal to 10. Once $value is greater than or equal to 10, it prints a message and exits.';

// let myCheckTweest = myTweest.slice(0,280);
// console.log(myCheckTweest);
// console.log(myCheckTweest.length);





// var str = 'Apple, Bananaa, kwin, papaya';
// // var res = str.substring(0,4);
// var res = str.substring(7,-2);
// console.log(res);



// var str = 'Apple, Bananaa, kiwi, papaya';
// // var res = str.substr(0,4);
// // var res = str.substr(7,-2);
// var res = str.substr(-4);
// console.log(res)







// let myBioDate = 'i am suman Pramod Suman';
// let myNewData = myBioDate.replace('suman','Suman');
// console.log(myNewData);









// let set = 'Hello Wold';
// // let newSet = set.charAt()
// console.log(set.charAt(0));






// let set = 'Hello Wold';
// console.log(set.charCodeAt(0));





// let set = 'HELLO WORLD';
// let lastChar = set.length - 1;
// console.log(set.charCodeAt(lastChar));







// let set = 'HELLO WORLD';
// console.log(set [0])










// let myName = 'pramod & Suman';
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());







// let fName = 'pramod';
// let lName = 'suman';
// console.log(fName.concat(lName));
// console.log(fName.concat(' ' ,lName));









// let set = '             Hello Wold !     ';
// console.log(set.trim());






// var tet = 'a,b,c | d,e';
// console.log(tet.split(' , '));
// console.log(tet.split('  '));
// console.log(tet.split(' | '));








// new Date ();
// new Date(Year, Month, Day, Hours, Minutes, Seconds, Milliseconds);
// new Date(Milliseconds);
// new Date(date String);





// let currDate = new Date();
// console.log(currDate);
// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());




// console.log(Date.now());














// var d = new Date(2022, 0, 5, 20, 33,30, 0);
// var d = new Date(2022);
// console.log(d.toLocaleString());

// var d = new Date('October 13, 2022 11:13:00');
// // console.log(d);
// console.log(d.toLocaleString());




// var d = new Date(1609574531435);
// var d = new Date(86400000*2);
// // var d = new Date(0);
// console.log(d.toLocaleString());










// const currDate = new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());









// const curDate = new Date();
// console.log(curDate.setFullYear(2022));
// console.log(curDate.setFullYear(2022, 10, 5));
// let setMonth = curDate. setMonth(10);
// // console.log(curDate.setMonth(10));
// console.log(setMonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());








// const curTime = new Date();

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());









// let curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));










// new Date().toLocaleTimeString();//11:18:48 am
// new Date().toLocaleDateString(); //11/16/2022
// new Date().toLocaleString(); //11/16/20222, 11:18:48 am



//    (function(){
//         setInterval(() => {
//             var d = new Date().toLocaleTimeString();
//             document.getElementById('demo').innerHTML = d;
//         }, 1000)

//     })();



// console.log(Math.PI);


// let num = 10.2565;
// let num = 10.501;
// console.log(Math.round(num));

// console.log(Math.pow(2,3));
// console.log(2**3);











// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));








// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));








// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.01));


// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));











// console.log(Math.min(0,150,30,20,-8,-200));
// console.log(Math.max(0,150,30,20,-8,-200));




// console.log(Math.floor(Math.random()*10));










// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));











// let bioData = {
//     myName : {
//         realName : 'Pramod Singh',
//         channelName : 'pramod Singh'
//     },
//     myAge: '29',
//     getData (){
//         console.log(`my name is ${bioData.myName} and my Age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName.channelName);





// let bioData = {
//     myName :'Pramod Singh',
//     myAge: '29',
//     getData (){
//         console.log(`my name is ${bioData.myName} and my Age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();











// const obj = {
//     myAge : 28,
//     myName() {
//         console.log(this.myAge);
//     }
// }
// obj.myName();




// const obj = {
//     myAge : 28,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();










// let bioData = {
//     myName : {
//         realName : 'Pramod Singh',
//         channelName : 'pramod Singh'
//     },
//     myAge: '29',
//     getData (){
//         console.log(`my name is ${this.myName.channelName} and my Age is ${this.myAge}`);
//     }
// }
// bioData.getData();












const myBioDate = ['pramod', 'suman', 28];


// let myFName = myBioDate[0];
// let myLName = myBioDate[1];
// let myAge = myBioDate[2];


// let [myFName, myLName, myAge] = myBioDate;

// console.log(myFName);


// let [myFName, myLName, myAge, myDegree = 'MBBS'] = myBioDate;
// console.log(myDegree);









// let myName = 'Pramod Singh';
// const myBio = {
//     [myName] : 'Hello How are you ?',
//     [20 + 8] : 'is my age'
// }

// console.log(myBio);












// let myName = 'Pramod Singh';
// let myAge = 28;

// const myBio = {
//     myName :myName,
//     myAge :myAge,
// }
// console.log(myBio);



// let myName = 'Pramod Singh';
// let myAge = 28;

// const myBio = {myName, myAge}
// console.log(myBio);











// const colors = ['red','green','blue','white'];
// const myColors = ['red','green','blue','white','yellow', 'black'];

// const myFavColor = ['yellow', 'black', ...colors];
// console.log(myFavColor);









// const colors = ['red','green','blue','white'];

// const isPresent = colors.includes('purple');

// console.log(isPresent);









// const message = 'my name is pramod';
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));










// const person = {name: 'fred', age : 28};
// console.log(Object.values(person));
// console.log(Object.entries(person));










// const arr = [
//     ['zoon_1', 'zoon_2'],
//     ['zoon_3', 'zoon_4'],
//     ['zoon_5', 'zoon_6'],
//     ['zoon_7', ['zoon_7', ['zoon_7', 'zoon_8']]],
// ];
// console.log(arr.flat(Infinity));












// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log(oldNum + 12);

// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);







// var myName;
// myName = 'pramod';
// console.log(myName);










// let a = 'Hello Guys.';

// const first = () => {
//     let b = 'How are You ?';

//     const second = () => {
//         let c = 'Hi I am Fine Thank  you';
//         console.log(a+b+c);
//     }
//     second();
// }
// first();











// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a+b;
//         console.log(`the sum of the two no is ${sum}`);
//     }
//     return innerFun;
// }
// let checkClousure = outerFun(5);
// checkClousure();









// x = 'pramod';
// console.log(x);








// const fun2 = () => {
//     console.log(`function 2 is called`);
// }

// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called again`);
// }
// fun1();










// const fun2 = () => {
//     setTimeout(() => {
//         console.log(`function 2 is called`);
//     }, 2000);
// }

// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called again`);
// }
// fun1();










// function sum(num1, num2){
//     // console.log(num1);
//     return function(num2){
//        return function(num3) {
//         console.log(num1+ num2+ num3);
//        }
//     }
// }
// sum(5)(3)(8);











// setTimeout(() => {
//     console.log(`1 works id dome`);
//     setTimeout(() => {
//         console.log(`2 works id dome`);
//         setTimeout(() => {
//             console.log(`3 works id dome`);
//             setTimeout(() => {
//                 console.log(`4 works id dome`);
//                 setTimeout(() => {
//                     console.log(`5 works id dome`);
//                     setTimeout(() => {
//                         console.log(`6 works id dome`);
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)












// // for in loop

// let people = ['Pramod', 'Suman', 'Subodh', 'Anjali', 'Susthu', 'Rekha', 'Bitesh', 'Ansh', 'Roushni', 'Anvit',];


// let obj ={
//     Name:'Pramod & Suman',
//     language: 'JavaScript',
//     hobbies: 'Fillm Dekhna ',
// }


// // for (let index = 0; index < Object.keys(obj).length; index++) {
// //     const element = obj[Object.keys(obj)[index]];
// //     console.log(element);
    
// // }

// for (let keys in obj ){

//     console.log(obj[keys]);
// }



// for of loop
console.log('********** for of loop***********');

people = ['Pramod', 'Suman', 'Subodh', 'Anjali', 'Susthu', 'Rekha', 'Bitesh', 'Ansh', 'Roushni', 'Anvit',];


for(let name of people){
    console.log(name);
}