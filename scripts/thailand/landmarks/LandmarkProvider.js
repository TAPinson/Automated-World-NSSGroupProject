const landmarkArray = [
    {
        name: "The Grand Palace",
        location: "Bangkok"

    } , 
    {
        name: "Temple of the Emerald Buddha",
        location: "Bangkok"

    } , 
    {
        name: "Wat Arun",
        location: "Thonburi"

    } , 
    {
        name: "Railay Beach",
        location: "Krabi"

    } 
]

export const useLandmarks = () => {
    return landmarkArray.slice()
}