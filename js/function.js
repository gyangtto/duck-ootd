/**
 * 1. refresh(a) 에 대한 클릭이벤트 구문 작성
 * 2. a 태그의 기본기능 작동금지
 * 3. refresh를 누르면 알림이 뜨면서 #yellow 랑 pink 옷이 새로고침된다
 * 
 * 1. 썸네일(a) 에 대한 클릭이벤트 구문 작성
 * 2. 클릭한 요소의 url 속성값을 가져온다.
 * 3. #Yellow 쪽 옷을 누르면 .yellow 옷이 바뀌고, 
 * 4. #Pink 쪽 옷을 누르면 .pink의 옷이 바뀐다.
 */

 const arrImg = [
	'./images/c1.png',
	'./images/c2.png',
	'./images/c3.png',
	'./images/c4.png'
]

	const arrCover = [
		'./images/cp1.png',
		'./images/cp2.png',
		'./images/cp3.png',
		'./images/cp4.png'
]

const $refresh = document.querySelector('.refresh a')
const $ythmbs = document.querySelectorAll('.ythmbs a');
const $pthmbs = document.querySelectorAll('.pthmbs a')
		// background-image를 줬음 돔값을 가져옴
const $yellow = document.querySelector('.yellow');
const $pink = document.querySelector('.pink');


$refresh.addEventListener('click', function(evt){
    evt.preventDefault();
    alert('빵덕이들 새로고침!')

    $yellow.style.backgroundImage = 'url(./images/M1.png)'
    $pink.style.backgroundImage = 'url(./images/M2.png)'
  });


		$ythmbs.forEach(($ythmb,idx) => {
			
			$ythmb.addEventListener('click', function(evt){
				evt.preventDefault();

				const urlSrc = 'url(' +arrImg[idx]+ ')'
				$yellow.style.backgroundImage = urlSrc;
			});
		});

    $pthmbs.forEach(($pthmb,idx) => {
    
      $pthmb.addEventListener('click', function(evt){
      evt.preventDefault();

      const imgSrc = 'url(' +arrCover[idx]+ ')'
      $pink.style.backgroundImage = imgSrc;
    });
  });
    