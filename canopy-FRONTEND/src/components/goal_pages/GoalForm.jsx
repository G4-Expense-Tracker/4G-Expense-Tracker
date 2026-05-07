import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function GoalForm() {

    const plantHandler = () => {
        /* HANDLE NEW GOAL SUBMIT HERE */
        console.log('TEST')
    }

    //note that ive just used p tags for the labels, there is an MUI version but idk which one we are using so lets come back to that during styling

    return (
        <Box
        sx={{
            display:"block",
        }}>
            <Typography variant='body1' component="p">
                Name of the Goal
            </Typography>
            <TextField id="filled-basic" label="Goal Name" variant="filled" />

            <Typography variant='body1' component="p">
                Saving Goal
            </Typography>
            <TextField id="filled-basic" label="Saving Goal" variant="filled" />

            <Button variant="contained" 
            onClick={plantHandler}
            sx={{
                display:"block",
                /* no idea why this wont center but */
                }}>
                Plant My Seed
            </Button>

        </Box>


    )
}

export default GoalForm