/*
const backGround = document.getElementById("backGround-img");

const images = ["1.jpg", "2.jpg", "8.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

backGround.style.backgroundImage = `url(${chosenImage})`;

const images = [
  "https://gifdb.com/images/high/pixel-art-super-mario-computer-amwdq1xi8bgz0omx.webp",
];
*/

const images = [
  "1.jpg",
  "2.jpg",
  "8.jpg",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
//HTML ��Ҹ� �����ϴ� ���
const bgImage = document.createElement("img");
bgImage.src = `image/${chosenImage}`;
bgImage.classList.add("backGround"); //class �̸��� �߰�(CSS �۾��� ���ؼ�)
//������ ��Ҹ� ����
document.body.appendChild(bgImage);

/*
#�ð��� ���� ���� �κ�
>> ����1, ����ȭ������ �̹����� Ȱ���� ����� ó������ background�� ���ؼ��� ����
>> <img> �±׸� ����Ͽ� web ��ü�� �̹����� ���� �Ǵ� ����� ���� 
(position: absolute, html: relative / width, height:100%) 

>> ����2, �̹����� ȭ���� ũ�� ��ȭ�� ���� ���� ũ�Ⱑ ���Ͽ� ������ �������� ���� �߻� 
>> CSS����(card - product)���� ��, �������� ����� object-fit�� ����Ͽ� �ذ� 


[�����ڷ�]
1. https://developer.mozilla.org/ko/docs/Web/CSS/object-fit
2. https://www.freecodecamp.org/korean/news/cssro-mueosideun-jungang-jeongryeolhaneun-bangbeob-div-tegseuteu-deung/
*/
