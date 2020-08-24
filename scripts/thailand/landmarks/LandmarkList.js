import { useLandmarks } from './LandmarkProvider.js'
import { Landmark } from './Landmark.js'

export const landmarkList = () => {
    const element = document.querySelector(".thailandMain")
    const landmarks = useLandmarks()

    let cityHTMLRep = "";

    for (const landmark of landmarks){
            cityHTMLRep += Landmark(landmark)
    }

element.innerHTML+= `
    <section class="landmarkList">
        <h2>Landmarks</h2>
        ${cityHTMLRep}
    </section>
    `
}

