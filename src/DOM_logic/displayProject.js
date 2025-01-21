
import { displayTodo } from "./displayTodo";

const displayProject = function(project, div, deleteProject){
    const projectDiv = document.querySelector(".".concat(div.className));
    
    const group = document.createElement("div");
    group.className = "project";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = project.getTitle();

    const dueDate = document.createElement("p");
    dueDate.className = "dueDate";
    dueDate.textContent = project.getDueDate();

    const priority = document.createElement("p");
    priority.className = "priority";
    priority.textContent = project.getPriority();

    const removeProject = document.createElement("button");
    removeProject.className = "removeProject";
    removeProject.textContent = "delete";

    const divTodo = document.createElement("div");
    divTodo.className = "todos";

    group.appendChild(title);
    group.appendChild(dueDate);
    group.appendChild(priority);
    group.appendChild(removeProject); 
    group.appendChild(divTodo);

    projectDiv.appendChild(group);

    // Event listner to delete button
    removeProject.addEventListener("click", () => {
        deleteProject(project);
        group.remove();
    })

    const deleteTodo = function(todo){
        project.removeTodo(project.setOfTodo.indexOf(todo));
    } 
     
    for(let todo in project.setOfTodo){
        debugger;
         displayTodo(project.setOfTodo[todo],divTodo,deleteTodo);
    }
};


export {displayProject};