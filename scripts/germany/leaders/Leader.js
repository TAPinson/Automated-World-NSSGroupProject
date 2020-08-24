export const Leader = (leaderObj) => {
    return `
    <section class="leaderList-leader">
        <h3> ${leaderObj.name} </h3>
        <p> Origin: ${leaderObj.origin}</p>
    </section>
    `
}