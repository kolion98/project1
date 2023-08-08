"use strict"
/**
 * IIFE: 정의하자마자 즉시 실행되는 함수
 */
// (function prt() {
//     console.log('prt!!!!!!!!');
// })();

// let fnprt = function(a,b) {
//     console.log(`test fnprt ${a}, ${b}`);
// }

// fnprt(10,20);

// ((a,b) => {
//     console.log(`test fnprt2 ${a}, ${b}`)
// })(10, 20);

/**
 * 클로저
 */
// const addcount=function() {
//     let count=0;
//     count++;
//     return count;
// }

// document.getElementById('btn').onclick = function() {
//     document.getElementById('result')
//     .innerHTML=addcount();
// }

// const addcount =(function(){
//     let count = 0;
    
//     let fn = function() {
//         count++;
//         return count;
//     }
//     return fn;
// })();

// document.getElementById('btn').onclick = function(){
//     document.getElementById('result').innerHTML=addcount();
// }




