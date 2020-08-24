const leaderArray = [
    {
        name: "Russell Crowe",
        origin: "Wellington"
    },
    {
        name: "Peter Jackson",
        origin: "Wellington"
    },
    {
        name: "Keith Urban",
        origin: "Whangarei"
    },
    {
        name: "Lucy Lawless",
        origin: "Auckland"
    },
    {
        name: "Taika Waititi",
        origin: "Raukokore"
    },
    {
        name: "Lorde",
        origin: "Auckland"
    },
]

export const useLeader = () => {
    return leaderArray.slice();
}