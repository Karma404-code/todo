
const dialog = document.querySelector(".projectDialog");
const close = document.querySelector(".close");

const displayProjectForm = function(dialogButton){
    dialog.showModal();
    close.addEventListener("click", (e)=> {
        e.preventDefault();
        dialog.close();
    })
}

export {displayProjectForm};



