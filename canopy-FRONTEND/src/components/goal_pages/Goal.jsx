import Header from "./Header"



//DATABSE CALL TO GET ALL GOALS
//const goals = database call
const goals = [
    {
        name: "Tuition",
        targetAmount: 1000,
        progress: 0,
        level: 1
    },
    {
        name: "Korea",
        targetAmount: 15000,
        progress: 400,
        level: 2
    },
]

function Goal() {
    return (
        <>
            <Header {...goals[0]} />
            
            

        </>
    )

}

export default Goal