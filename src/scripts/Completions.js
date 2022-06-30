import { getCompletions} from "./dataAccess.js";

const mainContainer = document.querySelector("#container")


export const Completions = () =>{
    const completions = getCompletions()

    const completionString = (completion) => {
        let listHTML = ` 
        <li class="confetti">
            Party for ${completion.childName} clowned successfully!!
           
        </li>`
    return listHTML
    }
    
    let html = `
        <ul class="completedList">
            ${
                completions.map(completionString).join("")
            }
        </ul>
    `

    return html
}