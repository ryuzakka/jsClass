const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");
let toDos = [];   //To-Do를 저장하는 배열
const TODOS_KEY = "todos";    //오타방지를 위한 변수

/* DB(localStorage)에 저장 */
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //text를 string으로 변환하여 저장
}

/* To-Do 삭제 */
function deleteToDo(event) {
  const li = event.target.parentElement;  //클릭한 버튼의 부모 li 선택
  li.remove();
  toDos = toDos.filter(chosen => chosen.id != parseInt(li.id)); //string을 int로 변환
  saveTodo();
}

/* To-Do 화면에 노출 */
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

/* 사용자가 To-Do 작성 */
function handleToDoSubmit(event) {
  event.preventDefault();   //submit 자동 새로고침 기능 방지
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()  // text가 동일한 경우 대비 구분값 지정
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

/* DB 호출 */
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos); //string을 배열값으로(?) 변환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //DB값 하나씩 front에 뿌리기
}