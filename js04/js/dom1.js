/**
 * async: 브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행
 * defer: 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행
 * async, defer 모두 선언하지 않을 경우: 
 *   -> 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 바로 실행
 */

// document.getElementById('win_open').onclick = function() {
//     location.href = "https:///www.naver.com"; 
//     //document.write('hello');
// }

// let d = document.body;
// console.log(d);

// let list_id = document.getElementById('listId');
// console.log(list_id);

// let li_class = document.getElementsByClassName('listClass');
// console.log(li_class);

// let tagname = document.getElementsByTagName('li');
// console.log(tagname);

// let names = document.getElementsByName('listName');
// console.log(names);

// let child1 = document.body.children;
// console.log(child1);

// //let lis = document.getElementsByTagName('li')[2].textContent;
// // let lis = document.getElementsByTagName('li')[2].className;
// let lis = document.getElementsByTagName('li')[2].tagName;
// console.log(lis);

// let ele_red = document.getElementsByClassName('red');
// let ele_red1 = document.querySelectorAll('.red');

// // 불가능!
// // let len = ele_red.length;
// // for(let i=0; i< len; i++) {
// //     ele_red[i].className = 'green';
// // }


// //spread로 받아와서 사용하기
// [...ele_red].forEach(item=>item.className='green');

// //정적인 자료이므로 바로 forEach 가능
// document.querySelectorAll('.red').forEach(item=>item.className='green');

// // console.log(ele_red, typeof ele_red, Array.isArray(ele_red));
// // console.log(ele_red1, typeof ele_red1, Array.isArray(ele_red1));
// // for(ele of ele_red1) {
// //     ele.className = 'green';
// // }

// event정보
document.getElementById('append').addEventListener('click', function(e) {
    e.preventDefault();
    //console.log(e.target);
    let irum = document.getElementById('irum');
    let data = irum.value;
    let ele_li = document.createElement('li');
    
    let txt = document.createTextNode(data);
    ele_li.appendChild(txt);

    let result = document.getElementById('result');
    result.appendChild(ele_li);
    irum.value = "";
});

