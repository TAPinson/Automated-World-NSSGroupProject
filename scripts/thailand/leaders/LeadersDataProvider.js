const leaderArray = [
    {
        name: "Tony Jaa",
        origin: "Surin"

    } , 
    {
        name: "Suvanant Kongying",
        origin: "Bangkok"

    } , 
    {
        name: "Parinya Charoenphol",
        origin: "Chiang Mai"

    } , 
    {
        name: "Urassaya Sperbund",
        origin: "Pattaya"

    } 
]

export const useLeaders = () => {
    return leaderArray.slice()
}