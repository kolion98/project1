"use strict"
/**
 * let: hoisting은 되지만 초기화가 되지 않음, 선언과 동시에 초기화 필요
 * const
 * var: hoisting이 되고 undefined로 초기화가 됨
 * 
 * let과 const는 blcok scope
 */
// a=20;
// console.log('a', a);

// let a = 30;
// {
//     let a = 10;
//     console.log('block-a',a); //a:10
// }
// console.log('global-a',a); //a:30

// var su=100;
// {
//     var su = 10;
//     console.log('block-su',su);
// }
// console.log('global-su', su);

// console.log('------------------------');

// for(var i=1; i<5; i++){
//     console.log('i',i);
// }
// console.log('i...',i);

// console.log('name', name);
// for(var i=0; i<5; i++) {
//     console.log(i);
// }
// console.log(i);
// var name = 'abc';

// console.log('------------------------');

// let tf = '';
// if(tf)
//     console.log('true');
// else
//     console.log('false');

// let arr = [10, 20, 30];
// let fn = function() {
//     console.log('function!!!');
// }
// fn();
// console.log('------');
// console.log(arr.length);

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log('-------');
// console.log(typeof arr);
// console.log(typeof(arr));
// console.log(typeof fn);
// console.log(typeof(fn));

// let person={};
// console.log(typeof person);
// console.log('--------------');
// console.log(Array.isArray(arr));
// console.log(Array.isArray(person));
// console.log(typeof Infinity);

// let a = 10;
// let b = 'hong';
// console.log(typeof(a+b),a+b);

// console.log('a' + 10);
// console.log(10+20);
// console.log(typeof('10'/2), '10'/2);
// console.log(typeof(10/2), 10/2);
// console.log(typeof('a'/2), 'a'/2);

// console.log('----------------------');
// console.log(Boolean(''), Boolean(' '));
// console.log(Boolean(0), Boolean('0'));
// console.log(Number('10'), Number('aa'), Number(null), Number);
// console.log(String(0));

// /**
//  * 숫자형: parseInt parseFloat Number
//  */
// let irum = 'hong gil dong';
// let jumsu = 100;
// console.log('name : '+irum+", jumsu: " + jumsu);
// console.log('name : ', irum ,", jumsu: ",jumsu);
// console.log(`name :${irum}, jumsu: ${jumsu}`);

/**
 * 단항연산자: ++(증가), --(감소)
 * let x = 20;
 * let y = ++x; (전위 연산)
 * let z = x++; (후위 연산)
 * 
 * 이항연산자:
 * 산술연산자: +, -, *, /, %, **
 *  
 * 삼항연산자:
 *  
 * 
 */

// let a = 10;
// //let b = ++a;
// let b=a++;
// console.log(`a: ${a}, b:${b}`);

// console.log('---------------');
// let t1 = 10;
// let t2 = 5;
// console.log(t1+t2);
// console.log(t1*t2);
// console.log(t1/t2);
// console.log(t1%t2);
// console.log(t1**t2);

// console.log(10 + 20 +'aa');
// console.log('aa' + 10 + 20);

// //비교연산
// console.log(10>10);

// let a='10';
// let b=10;
// console.log(typeof a, typeof b);
// console.log(a==b);
// console.log(a===b);

// let m1 = {name: 'hong', age:20};
// let m2 = m1;
// let m3 = {name: 'hong', age:20};

// console.log(typeof m1, typeof m2, typeof m3);
// console.log(m1==m2, m1===m2); //ture
// console.log(m1==m3, m1===m3); //false

// console.log(null==undefined);
// console.log(null===undefined);
// console.log(false=='');
// console.log(false==0);
// console.log(false===0);

// /**
//  * 복합대입 연산자
//  * a += 10;
//  * 
//  */

// let a=10;
// console.log(a);
// a+=30;
// console.log(a);
// a/=4;
// console.log(a);

// let max;
// let su1=10;
// let su2=20;
// max=(su1>su2)?su1:su2;
// console.log(max);

// let a = 10;
// console.log(a>>2);
// console.log(a<<2);

//논리 연산
// console.log(10>=10 && 10!==10);
// console.log(10!==10 && 10>=10);

// console.log(10==10 && 20>=20);

// console.log(10>=10 || 10!==10);
// console.log(10!==10 || 10>=10);

// 조건문 if
// let kor=85;
// if (kor>=60) {
//     console.log('합격');
// } else {
//     console.log('불합격');
// }

// document.getElementById('btn').onclick=function() {
//     let elekor = document.getElementById('kor');
//     let eleeng = document.getElementById('eng');
//     let elemath = document.getElementById('math');

//     let kor = Number(elekor.value);
//     let eng = Number(eleeng.value);
//     let math = Number(elemath.value);

//     let avg = '';
//     avg = (kor+eng+math)/3;

//     let achieve = '';
//     if (kor >=90 && eng >=90 && math >=90) {
//         achieve = 'very good';
//     }
//     else if(kor >=90 || eng >=90 || math >=90) {
//         achieve = 'good';
//     }
//     else {
//         achieve = 'bad';
//     }

//     document.getElementById('result').innerHTML = '평균: ' + avg + ", 성취도: "+ achieve;
//     elekor.value='';
//     eleeng.value='';
//     elemath.value='';
// }

/**
 * switch 문
 */

// let a='1';
// switch(a) { //변수나 식이 들어감
//     case '1': //값이 들어감
//         console.log("1");
//         break;
//     case '2': //값이 들어감
//         console.log("2");
//         break;
//     case '3': //값이 들어감
//         console.log("3");
//         break;
//     default:
//         console.log("the others");
//         break;
// }

/**
 * 숫자를 입력받아서 3의 배수이면 3의
 */
// let a = prompt('숫자를 입력하세요', 0);
// Number(a);
// switch(a%3) {
//     case 0:
//         alert("3의 배수");
//         break;
//     case 1:
//         alert("나머지 값은 1");
//         break;
//     case 2:
//         alert("나머지 값은 2");
//         break;
// }

/**
 * for 문
 */

// for(let i=0; i<10; i+=2) {
//     console.log(i);
// }

// //Iterable
// let arr=['a1', 'a2', 'a3'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// console.log('=========================');

// for(let item of arr) {
//     console.log(item);
// }

// console.log('=========================');

// arr.forEach(item=> {
//     console.log(item);
// });

// console.log('=========================');

// let man = {
//     irum: '홍길동',
//     age: 20,
//     addr: '서울'
// };

// console.log(typeof man, man);
// console.log(man.irum);
// console.log(man.age);
// console.log(man.addr);

// console.log('=========================');
// for(let key in man) {
//     console.log(key);
// }

// console.log('==========배열에는 in을 사용하지 말자===============');
// for(let index in arr) {
//     console.log(index);
// }

// let data = 'hello, javascript!!!';
// console.log(data[1])

// // data[1]='T';
// // console.log(data);

// for(let item of data) {
//     console.log(item);
// }

/**
 * while문: ~'참'일 동안
 * 1...5까지 출력하시오
 */

// let i=0;
// while(i<5) {
//     console.log(++i);
// }

// /**
//  * 10, 8, 6, 4, 2
//  */

// let j=10;
// while(j>0) {
//     console.log(j);
//     j-=2;
// }

// let i=1;
// while(true) {
//     console.log(i);
//     if(i==5) break;
//     i++;
// }

// console.log("======================");

// for(let i=1; i<=10; i++) {
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
// }

// console.log("======================");

// let j = 0;
// while(j<10) {
//     j++;
//     if(j%3==0) {
//         continue;
//     }
//     console.log(j);
// }

// let sungjuckarr = [60, 90, 70, 100, 75];
// sungjuckarr.forEach(function(item) {
//     console.log(item);
// });


