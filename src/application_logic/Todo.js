
// Todo object constuctor
function Todo(title,dueDate,priority){
    this.title = title,
    this.dueDate = dueDate,
    this.priority = priority,
    this.status = false
}

// Change status: complete(true) && incomplete(false)
Todo.prototype.changeStatus = function(statusValue){
        this.status = statusValue;
}

// function to set and get title
Todo.prototype.setTitle = function(newTitle){
    this.title = newTitle;
}
Todo.prototype.getTitle = function(){
    return this.title;
}

// function to set and get dueDate
Todo.prototype.setDueDate = function(newDueDate){
    this.dueDate = newDueDate;
}
Todo.prototype.getDueDate = function(){
    return this.dueDate ;
}

// function to set and get priority
Todo.prototype.setPriority = function(newPriority){
    this.priority = newPriority;
}
Todo.prototype.getPriority = function(){
    return this.priority;
}

 export {Todo};