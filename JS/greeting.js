const loginForm = document.querySelector(".login");
const loginBtn = document.querySelector(".login button");
const loginInput = document.querySelector(".login input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();     // 이벤트의 기본동작을 막아준다. submit이벤트로 치면 웹브라우저의 새로고침을 막아준다.
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = "Hello " + username;
//  greeting.innerText = `Hello ${username}`;       윗줄과 똑같다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);        /* form에서 엔터를 누르거나 버튼을 클릭하면 submit 이벤트가 감지된다. */

const savedUsername = localStorage.getItem(USERNAME_KEY);   
console.log(savedUsername);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`;      /* 변수만 다르고 반복되는 이 두줄은 함수로 만들어 주는게 더 낫다. */
}