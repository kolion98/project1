"use strict"

/**
 * [객체 Object]
 * 
 * 1. Function 생성자 함수
 * 2. Object 생성자 함수
 * 3. 생성자 함수
 * 4. 객체 리터럴
 * 5. 클래스
 * 
 */

// //1. Function 생성자 함수
// const op = new Function("a","b","return a+b");

// let result = op(10, 20);
// console.log('result',result);

// //2. Object 생성자 함수
// let person1 = new Object();
// person1.name = "홍길동";
// person1.age = 20;
// person1.addr = "서울";

// console.log(`name: ${person1.name}, age: ${person1.age}, addr: ${person1.addr}`);
// console.log(person1);

// person1.prt = function(){
//     console.log("prt function!!!!!!");
// }

// console.log(typeof person1);
// console.log(Array.isArray(person1));

// //3. 생성자 함수
// function Man(name, age) {
//     this.name = name;
//     this.age = age;
//     this.prt = function() {
//         console.log(`name: ${name}, age: ${age}`);
//     }
// }

// const Man2 = function(name, age){
//     this.name = name;
//     this.age = age;
// }

// let m1 = new Man('hong', 20);
// let m2 = new Man('gil', 25)

// let m3 = new Man2('Koh', 26);
// let m4 = new Man2('Hello', 40);


// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);

// console.log(m1.name, m1.age);
// console.log("===================");
// console.log(m1['name'], m1['age']);

// console.log(m3.name, m3.age);
// console.log("===================");
// console.log(m3['name'], m3['age']);

// //4. 객체 리터럴
// const m1 = {irum:'hong', age:20, addr:'서울'};
// const m2 = {irum:'park', age:10, addr:'경기'};

// console.log(typeof m1, m1);
// console.log(typeof m2, m2);
// console.log(m1.irum, m1.age);
// console.log(m2['irum'], m2['age']);

// //5. 클래스
// class Student {
//     constructor(studentId, irum, age){
//         this.studentId=studentId;
//         this.irum=irum;
//         this.age=age;
//     }
// }

// let s1 = new Student(1, 'hong', 20);
// let s2 = new Student(2, 'park', 10);

// console.log(s1, typeof s1);
// console.log(s2, typeof s2);

// /**
//  * 속성 추가, 삭제, 변경
//  */

// s1.addr = '서울';
// s1.sayHello=()=>{
//     console.log("안녕하세요");
// }

// console.log(s1);
// console.log("========속성 삭제========")

// delete s1.addr;
// console.log(s1);

// console.log("========속성 변경========")

// s1.irum = 'Koh';
// console.log(s1);

// /**
//  * 대괄호만 사용하는 경우
//  * 여러개의 속성으로 한 값을 정의
//  * 런타임시 결정되는 속성
//  */

// // s1.nick1 nick2='eee'; // 오류
// s1['nick1 nick2'] = 'eee'
// console.log(s1);
// console.log(s1['nick1 nick2']);

// // 런타임
// let a = 'age';
// const user={
//     name: 'hong',
//     [a]: 20 
// }

// console.log(user);
// class Student {
//     constructor(studentId, irum, age){
//         this.studentId=studentId;
//         this.irum=irum;
//         this.age=age;
//     }
// }

// let s1 = new Student(1, 'hong', 20);
// console.log('--------------s1----------------');
// console.log(s1);

// for(let item in s1) {
//     console.log(item, s1[item]);
//     //console.log(s1.item); //ERROR
// }

class Student {
    constructor(irum, age){
        this.irum=irum;
        this.age=age;
    }
    prt= function() {
        console.log('prt method');
    }
}

Student.prototype.draw = function() {
    console.log('prt!!');
}


let ins1 = new Student("a1", 20);
let ins2 = new Student("a2", 10);
console.dir(ins1);
console.dir(ins2);


// let ins1 = new Student("a1", 20);
// console.log(ins1);
// console.log('---------------');
// console.dir(ins1);




