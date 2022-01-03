'use strict';

const list = document.querySelectorAll('.list');
function activeLink(e) {
	list.forEach((item) => {
		item.classList.remove('active');
	});
	// this.classList.add('active');
	e.currentTarget.classList.add('active');
}
list.forEach((item) => {
	item.addEventListener('click', activeLink);
});

// 함수를 이벤트 처리기로 사용하면 this는 이벤트를 발사한 요소로 설정됩니다. 일부 브라우저는 addEventListener() 외의 다른 방법으로 추가한 처리기에 대해선 이 규칙을 따르지 않습니다.

// 처리기로 호출하면 관련 객체를 파랗게 만듦
//  function bluify(e) {
//     언제나 true
//      console.log(this === e.currentTarget);
//     currentTarget과 target이 같은 객체면 true
//      console.log(this === e.target);
//      this.style.backgroundColor = '#A5D9F3';
//    }

//   문서 내 모든 요소의 목록
//    var elements = document.getElementsByTagName('*');

//   어떤 요소를 클릭하면 파랗게 변하도록
//   bluify를 클릭 처리기로 등록
//    for (var i = 0; i < elements.length; i++) {
//      elements[i].addEventListener('click', bluify, false);
//    }
