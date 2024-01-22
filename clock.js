const clock = document.querySelector("h2#clock");

function getclock() {
  //�ð�, ��¥ ������ �޾ƿ��� �Լ�
  const date = new Date();
  //.padstart(����, ���� ����); 2�ڸ�, 2�ڸ��� �ƴ� ��� �տ� 0dmf cnrk
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getclock();
// 1�� ���� �Լ��� �ݺ� ȣ��; (����, mili-second)
setInterval(getclock, 1000);
