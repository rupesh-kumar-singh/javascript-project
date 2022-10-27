
let todo = document.querySelector(".form-todo");
let texts = document.querySelector(".form-todo input[type ='text']");
 const todolist = document.querySelector(".todo-list");
 const done = document.querySelector(".done");

todo.addEventListener("submit",(e)=>{

    e.preventDefault();
    let newli = document.createElement("li");
    let newtexts = texts.value;
    let text  = `  <span class="text"> ${newtexts}</span>
    <div class="todo-button">
        <button class="done todo-btn">Done</button>
        <button class="remove todo-btn">remone</button>
    </div>`

    newli.innerHTML = text;
    let todolist = document.querySelector(".todo-list");
    todolist.append(newli);
    texts.value = "";


})

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        let linedrawn = e.target.parentElement.previousElementSibling;
    linedrawn.style.textDecoration = "line-through";
    console.log(linedrawn)

    }
    if(e.target.classList.contains("remove")){

        let aa = e.target.parentElement.parentElement;
        aa.remove();

    }
})