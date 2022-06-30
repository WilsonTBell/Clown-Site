import { sendRequest } from "./dataAccess.js";

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendance">Total Number of Junior Clowns</label>
            <input type="number" name="attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Party Location</label>
            <input type="text" name="address" class="input" />
         </div>
        <div class="field">
            <label class="label" for="reservationDate">Date needed</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="length">No. of Hours of Party</label>
            <input type="number" name="length" class="input" />
        </div>

        <button class="button"  style="vertical-align:middle"><span id="submitRequest">Submit </span></button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='attendance']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='reservationDate']").value
        const userLength = document.querySelector("input[name='length']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attendance: userAttendance,
            address: userAddress,
            reservationDate: userDate,
            length: userLength,
            completion: false
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

