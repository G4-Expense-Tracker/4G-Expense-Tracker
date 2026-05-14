import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createNewGoal } from '../../../api/goals.js';

function GoalForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');

    const plantHandler = async () => {
        try {
            const data = await createNewGoal(name, targetAmount)

            console.log(data.message)
            setName('');
            setTargetAmount('');

            navigate("/dashboard");
        } catch(err) {
            console.error('Error creating goal: ', err)
        }
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

            <TextField 
                id="filled-basic" 
                label="Goal Name" 
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Typography variant='body1' component="p">
                Saving Goal
            </Typography>
            <TextField 
                id="filled-basic" 
                label="Saving Goal" 
                variant="filled" 
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
            />

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