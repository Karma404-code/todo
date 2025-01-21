
import {Project} from "../application_logic/Project.js";
import { displayPage } from "./displayPage";
// Get project information and create projects
function getProjectFormData(setOfProject){
    const form = document.querySelector(".projectForm");

    const getData = e => {
        e.preventDefault();
        const formObj = new FormData(form);
        const project = new Project(formObj.get("title"),formObj.get("dueDate"),formObj.get("priority"));
        setOfProject.push(project);
        form.removeEventListener("submit",getData);
        form.parentElement.close(); // close the dialog box 
    };
    form.addEventListener("submit",getData);
};

export {getProjectFormData};


