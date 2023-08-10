"use strict"
document.getElementById('table_body').addEventListener('click', function(event) {
    let ele = event.target;
    let ele_tr = ele.parentElement;

    ele_tr.classList.toggle("yellow");
});

// document.getElementById('table_body').addEventListener('click', (event) => {
//     let ele = event.target;
//     let ele_tr = ele.parentElement;

//     ele_tr.classList.toggle("yellow");
// });

//this 사용
// let ele_td = document.getElementsByTagName('td');
// for(let i = ele_td.length-1; i >= 0; i--) {
//     ele_td[i].addEventListener('click', function(){
//         this.parentElement.classList.toggle("yellow");
//     })
// }