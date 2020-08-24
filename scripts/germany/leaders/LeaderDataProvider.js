const leaderArray = [
    {
        name: "Ludwig van Beethoven",
        origin: "Bonn"
    },
    {
        name: "Johannes Brahms",
        origin: "Hamburg"
    },
    {
        name: "Johann Sebastian Bach",
        origin: "Eisenach"
    },
    {
        name: "Albert Einstein",
        origin: "Ulm"
    }
]

// export a function that will return a copy of the original array
export const useLeaders = () => {
    return leaderArray.slice()
};