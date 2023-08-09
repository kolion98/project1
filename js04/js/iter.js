let irums = ['홍', '김', '이', '박', '나']

/**
 * 1. forEach
 * 2. map
 * 
 */

// //1.
// document.getElementById('btn').addEventListener('click', function(){
//     let elements='';
//     irums.forEach((irum) => {
//         elements += `<li>${irum}</li>`
//     });
//     document.getElementById('result').innerHTML = elements;
// });

//2.
// document.getElementById('btn').addEventListener('click', function(){
//     let elements='';
//     irums.map((irum) => {
//         elements += `<li>${irum}</li>`
//     });
//     document.getElementById('result').innerHTML = elements;
// });

document.getElementById('btn').addEventListener('click', function(){
    let elements = irums.map((irum) => `<li>${irum}</li>`);
    let result = elements.join('');
    document.getElementById('result').innerHTML = result;
});

let now = new Date();
console.log(now.toLocaleString());

