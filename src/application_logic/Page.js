import {Project} from "./Project.js";
import { getProjectFormData } from "../DOM_logic/getProjectFormData.js";
// Constructor for Page

function Page(heading, description){
    this.heading = heading,
    this.description = description,
    this.setOfProject = [],

    // Add and remove Project from the set 
    this.addProject = function(){
        getProjectFormData(this.setOfProject);
    },

    this.removeProject = function(index){
        this.setOfProject.splice(index,1);
    }
}
// function to set and get heading
Page.prototype.setHeading = function(newHeading){
    this.heading = newHeading;
}
Page.prototype.getHeading = function(){
    return this.heading;
}

// function to set and get description 
Page.prototype.setDescription= function(newDescription){
    this.description = newDescription;
}
Page.prototype.getDescription= function(){
    return this.description;
}

export {Page};