
import {Todo} from "./Todo.js";

// Project Object constructor
function Project(title,dueDate,priority){
    this.title = title,
    this.dueDate = dueDate,
    this.priority = priority,
    this.setOfTodo = [],

    // Add and remove todos from the set 
    this.addTodo = function(){
        const todo = new Todo("Todo_test",2025,"high");
        this.setOfTodo.push(todo);
    },

    this.removeTodo = function(index){
        this.setOfTodo.splice(index,1);
    },

    this.showTodo = function(){
        for(let todo in this.setOfTodo){
            console.log(todo);
        }
    }
}


// function to set and get title
Project.prototype.setTitle = function(newTitle){
    this.title = newTitle;
}
Project.prototype.getTitle = function(){
    return this.title;
}

// function to set and get dueDate
Project.prototype.setDueDate = function(newDueDate){
    this.dueDate = newDueDate;
}
Project.prototype.getDueDate = function(){
    return this.dueDate ;
}

// function to set and get priority
Project.prototype.setPriority = function(newPriority){
    this.priority = newPriority;
}
Project.prototype.getPriority = function(){
    return this.priority;
}

// Export function
export {Project};