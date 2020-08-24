import { useCities } from "./CityDataProvider.js";
import { City } from "./City.js"

export const cityList = () => {
    const element = document.querySelector(".newZealandMain")
    const cities = useCities()

    let cityHTMLRep = "";
    for (const city of cities) {
        cityHTMLRep += City(city)
    }

    element.innerHTML += `
    <section class="cityList">
        <h2>Cities</h2>
        ${cityHTMLRep}
    </section>`
}