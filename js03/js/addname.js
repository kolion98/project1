"use strict"
let input_name="";
const addName = (function() {
    let num = 0;

    let fn = function(input_name) {
        num++;
        return (num + ". "+ input_name);
    };
    return fn;
})();

// let nameList2 = [];
// let num2 = 1;
// const addName2 = function(input_name) {
//     nameList2.push(num2 + "." + input_name);
//     num2++;
//     return nameList2;
// }

// document.getElementById('btn').onclick = function() {
//     let input_name = document.getElementById('input_name').value
//     console.log('input_name: ', input_name, typeof input_name);
//     document.getElementById('result').innerHTML += `<li>${input_name}</li>`;
// }

document.getElementById('btn').onclick = function() {
    input_name = document.getElementById('input_name').value
    console.log('input_name: ', input_name, typeof input_name);
    document.getElementById('result').innerHTML += addName(input_name) + "<br>";
}


