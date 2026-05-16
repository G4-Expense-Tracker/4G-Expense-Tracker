import { Box } from "@mui/material"

function Circle({ completed }) {

    return (
        <Box
            sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: completed ? "#4CAF50" : "#E8DCCB",
                //change colours to match later
            }}
        />
    )
}

export default Circle