"use strict"
const ele_li = document.querySelectorAll(".tabItem");
const ele_panel = document.querySelectorAll(".tabpanel");

const init = function() {
    let initli = ele_li[0].firstElementChild;
    console.log(initli);
    let initA = initli.parentElement.getAttribute('aria-controls');
    console.log(initA);
    initli.classList.add('bgpanel');
    initli.focus();
    let initId = document.getElementById(initA);
    initId.classList.add('visit');    
}

init();

ele_li.forEach(item => {
    item.firstChild.addEventListener('focus', function(e) {
        e.preventDefault();
    })
});

// const ele_li = document.querySelectorAll(".tabItem > a");
// const ele_panel = document.querySelectorAll(".tabpanel");

// const init = (function() {
//     ele_li[0].classList.add("bgpanel");
//     ele_panel[0].classList.add("visit");
// })();

// ele_li.forEach(item => {
//     item.addEventListener('click', function() {
//         if(item.classList.contains("bgpanel")) {
//             item.classList.remove("bgpanel");
//         } else {
//             item.classList.add("bgpanel");
//         }
//     })
// })


