/**
 * 구조분해할당
 * 배열이나 객체 속성을 해체해서 개별 변수에 담는 것
 */

let [a,b] = [10,20];
console.log('a:',a);
console.log('b:',b);

console.log("===============================");
let [t1,t2,...t3] = [100,200,300,400,500];
console.log(t1,t2,t3);

console.log("===============================");
let [r1,,r2] = [100,200,300,400];
console.log(r1,r2);

let [h1, h2] = [10, 20];
console.log(h1, h2);
[h1, h2] = [h2, h1];
console.log(h1, h2);

console.log("===============================");
let man = {
    irum: 'hong',
    age: 20,
    addr: 'seoul'
}

// let {irum, age, addr} = man;
// console.log(`name: ${irum}, age: ${age}, addr: ${addr}`);
// console.log("===============================");
let {age, irum, addr} = man;
console.log(`name: ${irum}, age: ${age}, addr: ${addr}`);
console.log("===============================");

let {irum:mname, age:mage, addr:maddr} = man;
console.log(`name: ${mname}, age: ${mage}, addr: ${maddr}`);

console.log("===============================");
let arr = [];
arr.push({name:'hong', age:10});
arr.push({name:'park', age:20});
arr.push({name:'kim', age:30});
arr.push({name:'son', age:10, addr:'seoul'});

for(a of arr){
    if (a.addr == undefined){ 
        console.log(a.name, a.age);
    }
    else {
        console.log(a.name, a.age, a.addr);
    }
}

console.log("===============================");
let arr2 = new Array(3);

console.log(typeof arr);
console.log(typeof arr2)
console.log(Array.isArray(arr));
console.log(Array.isArray(arr2));