import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';


function ListItem({ notification }){
    return (
        <Box
        sx={{
            display:"flex"
        }}>

            <InfoIcon/>

            <Typography variant="body1" component="p">
                { notification }
            </Typography>

            <Switch defaultChecked/>

        </Box>
    )
}

export default ListItem