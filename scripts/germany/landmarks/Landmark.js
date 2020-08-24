export const Landmark = (landmarkObj) => {
    return `
    <section class="cityList-city">
        <h3> ${landmarkObj.name} </h3>
        <p> Location: ${landmarkObj.location}</p>
    </section>
    `
}