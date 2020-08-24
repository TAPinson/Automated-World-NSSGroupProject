const landmarkArray = [
    {
        name: "Neuschwanstein Castle",
        location: "Bavaria"
    },
    {
        name: "Brandenburn Gate",
        location: "Berlin"
    },
    {
        name: "Reichstag Building",
        location: "Berlin"
    },
    {
        name: "Cologne Cathedral",
        location: "Cologne"
    }
]

// export a function that will return a copy of the original array
export const useLandmarks = () => {
    return landmarkArray.slice()
};