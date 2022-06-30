import { PartyForm } from "./PartyForm.js";
import { Requests } from "./Requests.js";
import { Completions } from "./Completions.js";

export const ClownParty = () => {
    return `
        <h1>Button and Lollipop's Clown Extravaganza</h1>
        <section class="serviceForm">
            ${PartyForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
        <section class="completions">
            <h2>Completed Parties</h2>
            ${Completions()}
        </section>
    `
}