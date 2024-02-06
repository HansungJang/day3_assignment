const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASNAME = "hidden";
//이름이 사용자가 입력한 적이 있는지에 따라서 대응하기 위해서
//우선 요소를 숨겨 놓는 것을 default로 둠.
const USERNAME_KEY = "username";

// 이름을 입력받는 함수
function onLoginSubmit(event) {
  event.preventDefault(); //자동으로 새로고침 방지
  loginForm.classList.add(HIDDEN_CLASNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 입력받은 이름을 출력하는 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASNAME);
}

// ####### Main: 입력값이 있는지 확인!
// local-storage에 저장된 입력값이 있는지 확인!
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
