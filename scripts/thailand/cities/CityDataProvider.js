const cityArray = [
    {
        name: "Chiang Mai",
        population: 127240

    } , 
    {
        name: "Bangkok",
        population: 8281000

    } , 
    {
        name: "Phuket",
        population: 416582

    } ,
    {
        name: "Pattaya City",
        population: 119532

    } 
]

export const useCities = () => {
    return cityArray.slice()
}