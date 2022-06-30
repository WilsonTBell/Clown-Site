import { fetchRequests, fetchClowns, fetchCompletions } from "./dataAccess.js"
import { ClownParty } from "./Buttons.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = ClownParty()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)