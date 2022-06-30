import { getRequests, getClowns, deleteRequest, saveCompletion, updateRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const sortByDate = (arr) => {
    const sorter = (a, b) => {
       return new Date(a.reservationDate).getTime() - new Date(b.reservationDate).getTime();
    }
    arr.sort(sorter);
 };

 
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
            const requests = getRequests()


            const completion = {
                requestId: parseInt(requestId),
                clownId: parseInt(clownId),
                partyDate: (requests.map(request => {if(request.id === parseInt(requestId)){return request.reservationDate}})).pop() ,
                childName: (requests.map(request => {if(request.id === parseInt(requestId)){return request.childName}})).pop() 
                }
             
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
               
                saveCompletion(completion)

                requests.map(request => {if(request.id === parseInt(requestId)){
                    request.completion = true; 
                    const completedRequest = request; 
                    updateRequest(completedRequest)
                }
            }
            )
        }
    }
)

export const Requests = () => {
    // const unsortedRequests = getRequests()
    // const requests = sortByDate(unsortedRequests)
    const requests = getRequests()
    const clowns = getClowns()
    const requestString = (request) => {
        if (request.completion === false){
        let listHTML = ` 
        <li>
            Party for ${request.childName} on ${request.reservationDate}
            <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${
        clowns.map(
           clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
        }
         </select>
            <button class="request__delete"
                    id="request--${request.id}">
                Deny
            </button>
        </li>
    `
        
        return listHTML}
    }

    sortByDate(requests)

    let html = `
        <ul>
            ${
                requests.map(requestString).join("")
            }
        </ul>
    `

    return html
}