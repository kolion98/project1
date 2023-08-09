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
 * 엔터키 클릭
 * <script>
    var input = document.getElementById("myInput");

    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    });
  </script>
 * 
 */