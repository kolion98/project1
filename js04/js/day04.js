"use strict"
// let a1 = [10, 20, 30];
// let a2 = a1;

// console.log(a1===a2);

// a1.forEach(item => {
//     console.log(item);
// });

// a2[1]=100;
// console.log("=================");
// a1.forEach(item => {
//     console.log(item);
// });

// let a = [10,20,30];
// let b = Object.assign([],a);

// a.forEach(item =>{
//     console.log(item);
// })

// console.log(a===b);

// a[1] = 100;
// console.log("========a=======");
// a.forEach(item =>{
//     console.log(item);
// })

// console.log("========b=======");
// b.forEach(item =>{
//     console.log(item);
// })

// const originalArray = [1, 2, { a: 3 }];

// const copyArray = Object.assign([], originalArray);
// console.log("======= object a ========");
// console.log(copyArray[2].a); // 출력 결과: 4

// originalArray[0] = 777;
// originalArray[2].a = 9090;

// console.log("======== b ========");
// console.log(copyArray[0]);
// console.log(originalArray[0]);
// console.log(copyArray[2].a); // 출력 결과: 4

/**
 * Object.assign은 배열값에 대해서는 복사 후 객체에 들어가고,
 * object {}에 대해서는 얕은 복사가 일어남
 * -> 얕은복사, 깊은 복사는 객체에 대해서 일어남..당연히 배열값은 복사되어서 새로운 배열에 들어감
 * -> https://bbangson.tistory.com/78
 */


/**
 * 이메일: aaa
 * 도메인: aaa.com
 * String
 * 
 */
////1번
// let email = "aaa@aaa.com";
// let result = email.split('@'); 
// console.log(`이메일: ${result[0]} 도메인: ${result[1]}`);

// //2번
// let index = email.indexOf('@');
// let e = email.slice(0, index);
// let domain = email.slice(index+1);
// console.log("이메일:", e);
// console.log("도메인:", domain);

// let data = [10, 50, 40, 30, 100, 200];
// let result1 = data.find(function(element){
//     return element === 50;
// });
// console.log("result1:", result1);

// let result2 = data.filter(function(element){
//     return element >= 50;
// });
// console.log("result2:", result2);

// let arrName = ['hong', 'gil', 'dong'];
// let result = arrName.join('');
// console.log(result);

// let arr=[];
// arr.push("aaa");
// arr.push("bbb");
// arr.push("ccc");

// console.log(arr, arr.length);
// console.log('==========');
// arr.forEach(item=>console.log(item));

// let d1 = arr.pop();
// console.log('==========');
// console.log(`삭제한 요소: ${d1}, 전체요소: ${arr}`);



/**
 * try-catch 문
 * 
 */

// try {
//     console.log('test');
//     console.log('test2');
//     let arr = new Array(-1);
//     console.log('test3');
// } catch(e) {
//     console.log(e);
//     console.log('ttt');
// } finally {
//     console.log('finally');
// }
// let a = 10;
// try {
//     if(a>=20){
//         console.log('a가 20보다 큽니다');
//     } else if(a==20) {
//         throw new Error("20와 동일");
//     } else {
//         throw new Error("20보다 작음");
//     }
// } catch(e) {
//     console.log(e);    
// } finally {
//     console.log('end!!');
// }

// let a = 10;
// try {
//     if(a>=20){
//         console.log('a가 20보다 큽니다');
//     } else if(a==20) {
//         throw new Error("20와 동일");
//     } else {
//         throw new Error("20보다 작음");
//     }
// } catch(e) {
//     console.log(e);    
// } finally {
//     console.log('end!!');
// }


let pname = "123";
let age = 20;

try {    
    if (!Number.isNaN(Number(pname))){
        throw new Error("이름은 숫자일 수 없습니다!");
    }
    
    if (Number.isNaN(age)) {
        throw new Error("나이는 숫자이어야 합니다!");
    } else if (age<0) {
        throw new Error("나이는 음수일 수 없습니다!");
    }
    console.log(`이름: ${pname}, 나이: ${age}`);
} catch(e) {
    console.log(e);
}
