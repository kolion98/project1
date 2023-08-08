"use strict"
let a;

document.getElementById('start').addEventListener('click', function(){
    a = setInterval(() => {
        let current = new Date();
        let year = current.getFullYear();
        let month = current.getMonth()+1;
        let date = current.getDate();
        let hour = current.getHours();
        let miniute = current.getMinutes();
        let seconds = current.getSeconds();
        let result = `${year}.${month}.${date}. ${hour}:${miniute}:${seconds}`;
        document.getElementById('result').innerHTML = result;
    }, 100);
});

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(a);
});