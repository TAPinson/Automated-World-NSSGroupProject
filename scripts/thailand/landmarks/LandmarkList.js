import { useLandmarks } from './LandmarkProvider.js'
import { Landmark } from './Landmark.js'

export const landmarkList = () => {
    const element = document.querySelector(".thailandMain")
    const landmarks = useLandmarks()

    let landmarkHTMLRep = "";

    for (const landmark of landmarks){
            landmarkHTMLRep += Landmark(landmark)
    }

element.innerHTML+= `
    <section class="landmarkList">
        <h2>Landmarks</h2>
        ${landmarkHTMLRep}
    </section>
    `
}

