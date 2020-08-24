const landmarkArray = [
    {
        name: "Moeraki Boulders",
        location: "Hampden"
    },
    {
        name: "One Tree Hill",
        location: "Auckland"
    },
    {
        name: "The Sky Tower",
        location: "Auckland"
    },
    {
        name: "Huka Falls",
        location: "Lake Taupo"
    },
    {
        name: "Tongariro Crossing",
        location: "Tongariro National Park"
    },
    {
        name: "Mount Cook",
        location: "Canterbury"
    },
]

export const useLandmarks = () => {
    return landmarkArray.slice();
}