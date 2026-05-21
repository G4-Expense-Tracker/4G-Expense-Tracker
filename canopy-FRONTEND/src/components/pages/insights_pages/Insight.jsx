import { Box, Typography } from "@mui/material"
import FooterNav from "../../Footer/FooterNav"
import ExpenseHeader from "../../headers/ExpenseHeader"
import Top3 from "./top3/Top3"
import {LocalizationProvider} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

function Insights(){
    return(
        <Box>
            <ExpenseHeader/>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select Date" />
            </LocalizationProvider>

            {/* header */}

           


            <Typography variant="body1" component="p"> Insights </Typography>



            {/* calendar */}

            {/* WeeklyInsight or MonthlyInsight component */}

            {/* <PieChart/> */}

            <Top3/>

            <FooterNav/> 

        </Box>
    )
}

export default Insights