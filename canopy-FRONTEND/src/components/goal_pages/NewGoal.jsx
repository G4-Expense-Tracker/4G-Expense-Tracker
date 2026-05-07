import { Typography } from "@mui/material"

function NewGoal(){
    return (
        <>
            <Typography variant="h1" component="h1">
                Set New Goal
            </Typography>

            <Typography variant="body1" component="p">
                grow from this seed to see your tree
            </Typography>

            <img src="../../assets/seed1.png" alt="seed" />
        </>
    )
}

export default NewGoal()