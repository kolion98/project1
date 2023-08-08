// class Man {
//     constructor(name, age){
//         console.log('constructor');
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         console.log('getter name');
//         return this.name;
//     }
//     set name(name) {
//         console.log('setter name');
//         this._name = name;
//     }
//     get age() {
//         console.log('getter age');
//         return this.age;
//     }
//     set age(age) {
//         console.log('setter age')
//         this._age = age;
//     }
// }

// let m1 = new Man('hong', 20);

// console.log(m1._age);

class P1 {
    constructor(age) {
        this._age=age;
    }
    prt = function(){
        console.log("P1-prt method");
    }
}

class C1 extends P1{
    constructor(name, age) {
        super(age);
        this._name = name;
    }
    prt = function() {
        console.log('C1-prt method');
    }

    show = function() {
        console.log("C1 show method");
    }
}

let ins = new P1(10);
ins.prt();
//ins.show(); 메서드 선언안됨!

let ins2 = new C1('hong', 20);
ins2.prt();
ins2.show();
