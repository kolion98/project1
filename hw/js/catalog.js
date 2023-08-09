/**
 * 금요일 12시
 * 하단의 스크롤 네모는 selector, option: multiple, size=10
 * 추가 버튼 누르면, input 값 사라지고, 왼쪽 상자 안으로 들어감
 * 자료를 multiple로 누르고, 왼에서 오 버튼 누르면 왼 박스에서 값 사라지고 오른쪽으로 이동
 * 자료를 multiple로 누르고, 오에서 왼 버튼 누르면 오른 박스에서 값 사라지고 왼쪽으로 이동
 * 자료(element)를 더블 클릭하면 자료가 사라지게
 * 키보드로 엔터쳤을때, 추가되면 가산점
 * 교안3번, 45쪽
 * 
 */

//'추가'버튼 클릭 이벤트
document.getElementById('add').addEventListener('click', function() {
  let new_input = document.getElementById('new_input');
  let selector = document.getElementById('left_selector');
  let data = new_input.value;

  let ele_option = document.createElement('option');
  let txt = document.createTextNode(data);
  ele_option.appendChild(txt);

  selector.appendChild(ele_option);
  new_input.value = '';
});

//엔터를 통한 '추가'
document.getElementById('new_input').addEventListener('keyup', function(event) {
  if(event.key === 'Enter') {
    if(document.getElementById('new_input').value) {
      event.preventDefault();
      document.getElementById('add').click();
    }
  }
});

//'왼쪽에서 오른쪽' 버튼 누르기
document.getElementById('LtoR_btn').addEventListener('click', function() {
  let left_selector = document.getElementById('left_selector');
  let right_selector = document.getElementById('right_selector');
  let selected_list = left_selector.selectedOptions;

  [...selected_list].forEach(item=>{
    let data = item.value;
    let txt = document.createTextNode(data);
    let ele_option = document.createElement('option');
    ele_option.appendChild(txt);
    right_selector.appendChild(ele_option);
    item.remove();
  });
});

//'왼쪽에서 오른쪽' 버튼 누르기
document.getElementById('RtoL_btn').addEventListener('click', function() {
  let left_selector = document.getElementById('left_selector');
  let right_selector = document.getElementById('right_selector');
  let selected_list = right_selector.selectedOptions;

  [...selected_list].forEach(item=>{
    let data = item.value;
    let txt = document.createTextNode(data);
    let ele_option = document.createElement('option');
    ele_option.appendChild(txt);
    left_selector.appendChild(ele_option);
    item.remove();
  });
});

//더블클릭해서 element 지우기
document.getElementById('left_selector').addEventListener('dblclick', function(event) {
  let option_target = event.target;
  console.log(event);
  console.log(event.target);
  option_target.remove();
});

document.getElementById('right_selector').addEventListener('dblclick', function(event) {
  let option_target = event.target;
  option_target.remove();
});
