const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();        /* Date 객체를 불러와야 시간에 대한 정보를 얻을 수 있다. */
    const seconds = String(date.getSeconds()).padStart(2,"0");      /* padStart로 문자열의 길이와 앞에 채울 문자를 정할 수 있다. */
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);