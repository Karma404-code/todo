
// Display Todo in DOM

const displayTodo = function(todo, div, deleteTodo){
    const todoDiv = document.querySelector(".".concat(div.className));
    const group = document.createElement("div");
    group.className = "todo";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = todo.getTitle();

    const dueDate = document.createElement("p");
    dueDate.className = "dueDate";
    dueDate.textContent = todo.getDueDate();

    const priority = document.createElement("p");
    priority.className = "priority";
    priority.textContent = todo.getPriority();

    const removeTodo = document.createElement("button");
    removeTodo.className = "removeTodo";
    removeTodo.textContent = "deleteTodo";

    group.appendChild(title);
    group.appendChild(dueDate);
    group.appendChild(priority);
    group.appendChild(removeTodo); 

    todoDiv.appendChild(group);

    // Event listner to delete button
    removeTodo.addEventListener("click", () => {
        deleteTodo(todo);
        group.remove();
    })
}

export {displayTodo};