"use strict"
let acc = document.getElementsByClassName('accordian');

for(let i = 0; i< acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = '';
        } else {
            panel.style.maxHeight = '40vh';
        }
    });
}


