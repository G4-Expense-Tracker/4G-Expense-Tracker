
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';

function Savings({
    currentSavings,
    targetSavings,
    addSavings,
    subtractSavings
}) {

    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState("")
    const [mode, setMode] = useState("")

    const handleAdd = () => {
        setMode("add")
        setOpen(true)
    }

    const handleSub = () => {
        setMode("subtract")
        setOpen(true)
    }

    const handleSubmit = () => {

        const numericAmount = Number(amount)

        console.log(
            `operation: ${mode},
        amount: ${numericAmount}`
        )

        if (mode === "add") {
            addSavings(numericAmount)
        }

        if (mode === "subtract") {
            subtractSavings(numericAmount)
        }

        setOpen(false)
        setAmount("")
    }

    const progressPercent = (currentSavings / targetSavings) * 100

    return (
        <Box
            sx={{
                padding: "1rem"
            }}>

                <Typography variant='h1' component="h1">
                    ${currentSavings} / ${targetSavings}
                </Typography>

            {/*  progress bar */}

            <LinearProgress
                variant="determinate"
                value={progressPercent}
            />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem"
                }}>

                {/* buttons */}

                <Button variant="outlined" onClick={handleSub}>
                    {<RemoveIcon />} Savings
                </Button>

                <Button variant="contained" onClick={handleAdd}>
                    {<AddIcon />} Savings
                </Button>

                {/* pop; had no flow in figma so im making it up! */}

                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <DialogTitle>
                        {mode === "add"
                            ? "Add Savings"
                            : "Subtract Savings"}
                    </DialogTitle>

                    <DialogContent>

                        <TextField
                            label="Amount"
                            type="number"
                            fullWidth
                            value={amount}
                            onChange={(e) =>
                                setAmount(e.target.value)
                            }
                        />

                    </DialogContent>

                    <DialogActions>

                        <Button onClick={() => setOpen(false)}>
                            Cancel
                        </Button>

                        <Button onClick={handleSubmit}>
                            Okay
                        </Button>

                    </DialogActions>

                </Dialog>

            </Box>



        </Box>
    )
}

export default Savings