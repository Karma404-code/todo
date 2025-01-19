

const displayProject = function(project, div){
    const projectDiv = document.querySelector(".".concat(div.className));
    console.log(projectDiv);
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

    const remove = document.createElement("button");
    remove.className = "removeProject";
    remove.textContent = "delete";

    group.appendChild(title);
    group.appendChild(dueDate);
    group.appendChild(priority);
    group.appendChild(remove);

    projectDiv.appendChild(group);
};


export {displayProject};