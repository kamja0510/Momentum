const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOLIST_KEY = "todos";

let toDo = [];

function saveToDoList(){
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDo));
}

function deleteToDo(event){
    const li = event.target.parentElement;          /* 이벤트가 일어나는 타겟의 부모요소를 찾음. */
    toDo = toDo.filter((toDo) => toDo.id !== parseInt(li.id));        /* 배열에서 지우고 싶은 것들을 지우고 새로운 배열을 만드는 과정. */  
    saveToDoList();
    li.remove();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";    /* win + . 이모티콘 단축키 */
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    newToDoObj = {
        text : newToDo,
        id : Date.now()    //리스트의 아이디를 랜덤으로 부여하는 방법
    };
    toDo.push(newToDoObj);
    saveToDoList();       /* 어떤 것이든 문자열로 만들어주는 함수 */
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoList = localStorage.getItem(TODOLIST_KEY);

if(savedToDoList!==null){
    const parsedToDos = JSON.parse(savedToDoList);          /* 문자열을 문자열이 아닌 것으로 변환해줌.(JSON.stringify 의 반대라고 생각) */
    toDo = parsedToDos;
    parsedToDos.forEach(paintToDo)
}
