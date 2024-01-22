const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// Section9. localstorage에 삭제한 내용 업로드하기
//idea. filter로 추출한 배열 업로드
// 함수 이름 조심!

// Section8. HTML삭제한 내용 localstorage에 적용[key: filter]
// toy example(filter)
// function sextFilter(val) { return val !== 3;}
//  [1, 2, 3, 4].filter(sextFilter);
// filter라는 함수는 True가 return된 요소에 한해서 새로운 배열을 만들어준다.
// false가 return된 것은 제외 됨. (돌아가는 방식은 forEach와 동일하다)

// Section7. HTML에서 삭제한 list, localstorage에도 삭제한 내용 적용하기[key: obj자료형]
// localstorage에서는 어떻게 지워진 요인을 식별할까 -> idea, map, set같이 {key, value};형을 같도록 만들어 주는 것.
// Solution: newToDo: 데이터 저장방법을 Object(key, value)를 가진 방법으로 저장하도록 변경

// Section6. 새로고침 이후 작성된 to-do-list 업데이트하기
// issue: 새로고침 이후 새로운 to-do-list를 작성하면 기존에 있던 값이 삭제됨!
// point: const toDoSstorage = [];가 값을 초기화 시키고 있음!
// solution: 값을 복사해 두는 것!

// Section5. 저장한 list를 불러오는 함수[Key:(.parse)]
const TODOS_KEYS = "toDoSstorage";

// Section4. 입력 받은 list를 저장하는 함수
//const toDoSstorage = []; //업데이트 적용을 위해서 //local-Storage에 저장되는 배열
let toDoSstorage = []; // section6. -start
//[주의] localstorage는 오직 text만 저장 가능! -> 1개의 덩어리 형태로 저장
// 1. string으로 개별적으로 저장할수 있는 방법이 필요(요소 각각애 접근하기 위해서): JSON.Stringify
// -> 그냥 toDoSstorage만 사용한 setItem의 경우, console창에 경고문 출력
// -> JSON.stringify() 사용하고 나니 해당 경고문 해결 (localstorage에 배열 형태로 저장되어 있는 것을 확인)

function saveToDos() {
  localStorage.setItem(TODOS_KEYS, JSON.stringify(toDoSstorage));
}

// Section3. 삭제해주는 기능 (입력 받은 값중 누구를 지울 것인가!, 식별하는 것이 중요!)
function deleteToDo(event) {
  //innerText사용으로 Console 창에서는 '알수없는 요인'으로 경고문이 나오지만 실제 출력은 우리가 원하는 형식이 출력 됨을 확인
  const li = event.target.parentElement; //어떤 버튼을 누르는지 (어디에 소속된 것인지, 부모 요소 소속을 알려줌; 식별 가능)
  li.remove();
  toDoSstorage = toDoSstorage.filter((toDO) => toDO.id !== parseInt(li.id)); // section9. start-end
  saveToDos();
}

// Section2. list 요인으로 만들어서 출력하는 함수
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id; //Obj의 key값(li 식별하는 요인)
  const span = document.createElement("span");
  span.innerHTML = newToDo.text; //Obj의 value값
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  /*하위 항목이 부모 항목인 것! 순서 잊지 말기*/
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// Section1. 입력받은 text를 유지 시키는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  //입력을 저장, 입력란은 다시 초기화
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(), //Random값 생성
  }; //Section7 - start.
  toDoSstorage.push(newTodoObj); //section 4(입력 저장)
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// // ***** #  forEach확인하기 위한 toy 함수
// // 지금 처리되고 있는 item에 대해서 출력한다면
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEYS); //section 5 시작(요소 가져오기 부터)
// 입력이 저장 된 값이 있는 경우에만 parse전환
// array로 나누었다 == 각각의 요소에 대해서 함수를 적용할 수 있다!
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  toDoSstorage = parsedToDos; //section6. end
  parsedToDos.forEach(paintToDo); // forEach: array 각각에 대해서는 1개의 함수를 호출한다.
  //sayHello라는 독립적인 함수를 사용하는 것과 다른 방식으로 함수를 사용할 수 있다.
  //parsedToDos.forEach((item) => console.log("this is the turn of", item));
  //(item)=>console.log("this is the turn of", item); // arrow_function이라고 한다.
}
