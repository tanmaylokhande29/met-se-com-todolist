let addTodoBtn = document.querySelector("#addTodoButton");
let todo_Popup = document.querySelector(".popupTODO");
let save_Btn = document.querySelector("#saveBtn");

addTodoBtn.addEventListener("click", () => {
    todo_Popup.classList.add("showPopup");
    todo_Popup.classList.remove("closePopup")
})

save_Btn.addEventListener("click", () => {
    todo_Popup.classList.remove("showPopup");
    todo_Popup.classList.add("closePopup");
})

// TODO list data retrieve from input fields logic


let todo_name = document.querySelector("#todoName");
let todo_description = document.querySelector("#todoDescription");
let todo_priority = document.querySelector("#todoPriority");
let taskList = document.querySelector(".taskList");


// let list = [];

save_Btn.addEventListener("click", () => {

    let uniqueId = Date.now();

    let todoData = {
        name: todo_name.value,
        description: todo_description.value,
        priority: todo_priority.value,
        uId: uniqueId
    }

    let todos = localStorage.getItem("todos");
    todos = todos === null ? [] : JSON.parse(todos);
    console.log(todos);

    todos.unshift(todoData);

    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todoData)
});


// Logic for to fetch todos from the local storage and displaying it
let fetchedTodos = localStorage.getItem('todos');
// console.log(fetchedTodos)

fetchedTodos = JSON.parse(fetchedTodos);
// console.log(fetchedTodos)

let newList = fetchedTodos.map((value) => {
    // console.log(value.name, value.description, value.priority)

    // Priority
    let mark;
    if (value.priority === "high") {
        mark = "!!!";
    } else if (value.priority === "medium") {
        mark = "!!"
    } else if (value.priority === "low") {
        mark = "!"
    }

    // Background color of priority
    let bgCol;
    if (mark === "!!!") {
        bgCol = "#EA3D2F";
    } else if (mark === "!!") {
        bgCol = "#367BF5";
    } else if (mark === "!") {
        bgCol = "#2FA84F";
    }

    return `

                <div class="task">   
                    <div class="taskDetails">
                        <h4>${value.name}<span class="priorityMark" style="background-color: ${bgCol};">${mark}</span></h4>
                        
                        <p>${value.description}</p>
                    </div>
                        <div class="delBtn">
                        <a href="#">Delete</a>
                    </div>
                </div>
        `
})

taskList.innerHTML = newList.join(" ");
