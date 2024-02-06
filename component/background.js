/*
const backGround = document.getElementById("backGround-img");

const images = ["1.jpg", "2.jpg", "8.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

backGround.style.backgroundImage = `url(${chosenImage})`;

const images = [
  "https://gifdb.com/images/high/pixel-art-super-mario-computer-amwdq1xi8bgz0omx.webp",
];
*/

const images = ["1.jpg", "2.jpg", "3.png", "4.png", "5.png", "7.png", "8.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
//HTML 요소를 생성하는 명령
// solution #1. <Img>태그를 사용하는 경우
const bgImage = document.createElement("img");
bgImage.src = `image/${chosenImage}`; //이미지 저장 되어 있는 폴더 경로 설정(지금 저장 되어있는 폴더 이름 'image')
//console.log(bgImage.src);
// // solution #2. <background> CSS속성을 사용하기 위한 <div>태그를 사용하는 경우
// const bgImage = document.createElement("div");

// bgImage.style.backgroundImage = `url(${chosenImage})`;

bgImage.classList.add("backGround"); //class 이름을 추가(CSS 작업을 위해서)
//console.log(bgImage);

//생성한 요소를 삽입
document.body.appendChild(bgImage);

// bgImage.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundImage = `url(${bgImage.src})`;
// console.log(bgImage.src);
/*
#시간을 많이 들인 부분
>> 문제1, 바탕화면으로 이미지를 활용할 방법을 처음에는 background에 대해서만 생각
>> <img> 태그를 사용하여 web 전체에 이미지가 적용 되는 방법을 선택 
(position: absolute, html: relative / width, height:100%) 

>> 문제2, 이미지가 화면의 크기 변화에 따라서 같이 크기가 변하여 비율이 망가지는 문제 발생 
>> CSS과제(card - product)만들 때, 과제에서 사용한 object-fit를 사용하여 해결 


[참고자료]
1. https://developer.mozilla.org/ko/docs/Web/CSS/object-fit
2. https://www.freecodecamp.org/korean/news/cssro-mueosideun-jungang-jeongryeolhaneun-bangbeob-div-tegseuteu-deung/
*/
