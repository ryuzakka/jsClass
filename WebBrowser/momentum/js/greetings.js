const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginBtn = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* function onLoginBtnClick() {
  const value = loginInput.value;
  if(value) {
    console.log("hello", value);
  } else {
    console.log("please input your name");
  }
}
*/

function onLoginSubmit(event) {
  event.preventDefault();
  // console.log(event);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // console.log(loginInput.value);
  // greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}