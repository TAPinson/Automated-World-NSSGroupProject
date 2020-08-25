export const Landmark = (landmarkObj) => {
    return `
    <section class="landmarkList-landmark search"> 
        <h3>${landmarkObj.name}</h3>
        <p>Location: ${landmarkObj.location}</p>
    </section>
    `
}