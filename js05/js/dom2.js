"use strict"
document.getElementById('append').addEventListener('click', function(e) {
    e.preventDefault();
    //console.log(e.target);
    let irum = document.getElementById('irum');
    let data = irum.value;
    if(data) {
        let ele_li = document.createElement('li');
    
        let txt = document.createTextNode(data);
        ele_li.appendChild(txt);
    
        let result = document.getElementById('result');
        result.appendChild(ele_li);
        irum.value = "";
    }
});

document.getElementById('result').addEventListener('click', function(e) {
    e.preventDefault();
    let ele = e.target;
    ele.classList.toggle("yellow");
})

document.getElementById('result').addEventListener('dblclick', function(e) {
    e.preventDefault();
    e.target.remove();
})
