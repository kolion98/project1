"use strict"
const searchfn = (e) => {
    e.preventDefault();
    let inputValue = e.target.value;
    let element_li = document.getElementsByTagName('li');
    [...element_li].forEach(item=>{
        let ele_a = item.getElementsByTagName('a')[0];
        let a_content = ele_a.textContent;
        if(a_content.indexOf(inputValue)>-1){
            item.style.display="";
        } else {
            item.style.display="none";
        }
    })
}
document.getElementById("myInput").addEventListener("input", searchfn);

// let search_ul = document.getElementById('myul');
// let booklist = search_ul.querySelectorAll('li');

// document.getElementById('myInput').addEventListener('input', function(event) {
//     let result = [];
//     event.preventDefault();    
//     let val = document.getElementById('myInput').value;
//     booklist.forEach(item => {
//         if (item.childNodes[0].textContent.includes(val)){
//             console.log(item.childNodes[0].textContent);
//             result.push(item);
//         }
//     }) 
    
//     while(search_ul.firstChild) {
//         search_ul.firstChild.remove();
//     }
//     result.forEach(item => {
//         search_ul.appendChild(item);
//     })
// });