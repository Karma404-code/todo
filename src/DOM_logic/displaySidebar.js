
import { displayPage } from "./displayPage";

const links = document.querySelector(".links");

const displaySidebarLinks = function(content){
    for(let link in content){
        const button = document.createElement("button");
        button.className = link;
        button.textContent = content[link].getHeading();

        // add event to the button
        button.addEventListener("click", function(){
            displayPage(content[link]);
        })

        links.append(button);
    }
}

export {displaySidebarLinks};
