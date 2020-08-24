const cityArray = [
    {
        name: "Berlin",
        population: 3769000
    },
    {
        name: "Potsdam",
        population: 15322
    },
    {
        name: "Hamburg",
        population: 1899000
    },
    {
        name: "Kiel",
        population: 246306
    }
]

// export a function that will return a copy of the original array
export const useCities = () => {
    return cityArray.slice()
};