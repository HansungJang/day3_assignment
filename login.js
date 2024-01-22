const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASNAME = "hidden";
//�̸��� ����ڰ� �Է��� ���� �ִ����� ���� �����ϱ� ���ؼ�
//�켱 ��Ҹ� ���� ���� ���� default�� ��.
const USERNAME_KEY = "username";

// �̸��� �Է¹޴� �Լ�
function onLoginSubmit(event) {
  event.preventDefault(); //�ڵ����� ���ΰ�ħ ����
  loginForm.classList.add(HIDDEN_CLASNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// �Է¹��� �̸��� ����ϴ� �Լ�
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASNAME);
}

// ####### Main: �Է°��� �ִ��� Ȯ��!
// local-storage�� ����� �Է°��� �ִ��� Ȯ��!
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
