export const City = (cityObj) => {
    return `
    <section class="cityList-city"> 
        <h3>${cityObj.name}</h3>
        <p>Population: ${cityObj.population}</p>
    </section>
    `
}