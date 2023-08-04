console.log('Hello');

/**
 * 1. 변수 선언
 * let
 * var
 * 
 * 2. 상수
 * const
 */

const irum = '고나형';
console.log('name', irum)
// irum = 'park';
// console.log('new_name', irum);

// var a =10;
// console.log('a', a);
// a=20;
// console.log('new-a', a);


/**에러나지 않음..다만 undefined */
// console.log('a', a);
// var a =10; //hoisting: 자료 선언을 맨 위로 올림

// var a;
// console.log('a', a);
// a = 10;
// console.log('a', a);

/** */

// su = 10;
// console.log('su', su);
// let su;
/**
 * 
 */

let a=10;
let b='aaa';
let c=10.2;
let d=10==10;
let f=null;
let e;

console.log(typeof a, 'a');
console.log(typeof b, 'b');
console.log(typeof c, 'c');
console.log(typeof d, 'd');
console.log(typeof e, 'e');
console.log(typeof f, 'f');
console.log(10/0, '10/0');
console.log(-10/0, '-10/0');
console.log('aa'/10, 'aa/10');

let t1=[]; //배열
let t2={}; //객체
let t3=function(){
    console.log('test');
}; //함수
console.log(typeof t1, 't1');
console.log(typeof t2, 't2');
console.log(typeof t3, 't3');