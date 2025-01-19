
import {Project} from "./Project.js";

// Get project information and create projects
const getProjectFormData = function(formName){
    const form = document.querySelector(formName);
    let listOfProject = new Array;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formObj = new FormData(form);
        // console.log(Object.fromEntries(formObj)); 

        const project = new Project(formObj.get("title"),formObj.get("dueDate"),formObj.get("priority"));
        listOfProject.push(project);
        // console.log(listOfProject);
    });
};

export {getProjectFormData};


