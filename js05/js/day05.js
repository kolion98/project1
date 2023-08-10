/**
 * children: 자식 중 element
 * firstChild
 * lastChild
 * nextSibling
 * previousSibling
 * 
 * 
 * hash
 */

const ul_ele = document.querySelector('ul');
console.log(ul_ele.children);
console.log(ul_ele.hasChildNodes());
console.log(ul_ele.firstElementChild);
console.log(ul_ele.lastElementChild);


// let ele_m3 = document.getElementById('m3');
// console.log(ele_m3.nextElementSibling);
// ele_m3.style.backgroundColor = 'yellow';
// ele_m3.previousElementSibling.style.color = 'red';

/**
 * className: class attribute 값을 변경하거나 얻어올 때
 * classList: add, remove, toggle, replace 메서드 사용
 * 
 * 
 */

const ele_m2 = document.getElementById('m2');
console.log(ele_m2.className);
ele_m2.className = 'green';
console.log(ele_m2.className);

let ele_li = document.querySelectorAll('li');
ele_li.forEach(item=> {
    if(item.classList.contains("red")){
        item.classList.replace("red", "green");
    }
})



