let addTodoButton = document.querySelector(".add-todo"); // ye ek aisa element search krega jispe add-todo class lgi hogi 
let todoInput = document.querySelector(".todo-input");
let todosList = document.querySelector(".todos-list-container");

// humne todoInput pe keypress event lga diya hai means ki jab bhi koi key press hogi to ye event occur hoga 
// aur agr pressed key is equal to Enter to addTodo ko call lg jaayegi
todoInput.addEventListener("keypress", function(e) {
    // console.log(e);
    if (e.key == "Enter") {
        addTodo();
    }
});

// attach click event on addTodoButton
// jisse addTodoButton pe click hote hi addTodo() ko call lg jaayegi
addTodoButton.addEventListener("click", function() {
    addTodo();
});


function addTodo() {
    //console.log(event);
    let todoInputValue = todoInput.value; //yha pe todoInput(input box) element ke value key me jo pda hoga wo aa jaayega
    if (todoInputValue) { // agr input box empty hoga to appendTodo nhi chlega
        appendTodo(todoInputValue);
        // it will empty the todoInput
        todoInput.value = ""; // taki ek baar append ho jaane par input box empty ho jaaye
    }
}

function appendTodo(todo) {
    let todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    // <div class="todo-item"> </div>

    let pTag = document.createElement("p");
    pTag.classList.add("todo");
    pTag.textContent = todo;
    // <p class="todo-input">Learn Css</p>

    let deleteTodoButton = document.createElement("button");
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent = "Delete";
    // <button class="delete-todo">Delete</button>
  
  // ye event humne idhar hi attach krna pdega hum bahar is button pe event nhi lga skte
  // kyunki tb tak dom pe ye button bna hi nhi hoga 
  // to jaise hi deleteTodButton bnega uspe event attach ho jaayega 
    deleteTodoButton.addEventListener("click", deleteTodo); 

    todoItemDiv.append(pTag); // x.append(y) -> ye y element ko x element ka child node bna deta hai
    todoItemDiv.append(deleteTodoButton);

    todosList.append(todoItemDiv); // jo div create kiya hai wo todoList me append kr dete hai
}

function deleteTodo(e) {
    e.target.parentNode.remove(); //#1
    // console.log(e);
}

/*
#1
kyunki humne deleteTodoButton pe ek event lgaya hai to iss element ka ek event obj bnega
to agr hum e.target ko console krenge to ye button console pe dhikega ki humne deleteTodoButton ko click kiya hai
to iss line ka matlab hai ki jaha pe hum click kr rhe hai(deleteTodoButton) uski parentNode(div with class todo-item) ko remove krdo
 
*/