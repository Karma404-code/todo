
import {Project} from "./Project.js";

// Constructor for Page

function Page(heading, description){
    this.heading = heading,
    this.description = description,
    this.setOfProject = [],

    // Add and remove Project from the set 
    this.addProject = function(){
        const project = new Project("Project_test",2025,"high");
        this.setOfProject.push(project);
    },

    this.removeProject = function(index){
        this.setOfProject.splice(index,1);
    },

    this.showProject = function(){
        for(let project in this.setOfProject){
            console.log(project);
        }
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