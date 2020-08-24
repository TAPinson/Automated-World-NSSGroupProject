// Code to populate cities section
import { useLeaders } from './LeaderDataProvider.js'
import { Leader } from './Leader.js'

export const leaderList = () => {
    const element = document.querySelector(".germanyMain")
    const leaders = useLeaders()
    let leaderHTMLRep = ""

    for (const leader of leaders) {
        leaderHTMLRep += Leader(leader)
    }

    element.innerHTML += `
        <section class="leaderList">
        <h2> Leaders </h2>
        ${leaderHTMLRep}
        </section>
        `
}