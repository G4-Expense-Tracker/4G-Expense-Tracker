import {
    Dialog,
    DialogContent,
    Typography,
    Button,
    Box
} from "@mui/material"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Congrats({
    open,
    onClose,
}) {

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >

            <DialogContent>

                <Box
                    sx={{
                        padding: 2
                    }}
                >

                    <EmojiEventsIcon/>

                    <Typography variant="h2">
                        Congrats!
                    </Typography>

                    <Typography>
                        You've reached your goal. TreeName Unlocked!
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={onClose}
                    >
                        Check Garden
                    </Button>

                </Box>

            </DialogContent>

        </Dialog>
    )
}

export default Congrats

