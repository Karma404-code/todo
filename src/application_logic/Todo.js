
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

 export {Todo};