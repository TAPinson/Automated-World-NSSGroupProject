import { useLeader } from "./LeaderDataProvider.js";
import { Leader } from "./Leader.js"

export const leaderList = () => {
    const element = document.querySelector(".newZealandMain")
    const leaders = useLeader()

    let leaderHTMLRep = "";
    for (const leader of leaders) {
        leaderHTMLRep += Leader(leader)
    }

    element.innerHTML += `
    <section class="leaderList">
        <h2>Leaders</h2>
        ${leaderHTMLRep}
    </section>`
}