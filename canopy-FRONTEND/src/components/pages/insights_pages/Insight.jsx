import { Box, Typography } from "@mui/material"
import FooterNav from "../../Footer/FooterNav"
import ExpenseHeader from "../../headers/ExpenseHeader"

function Insights(){
    return(
        <Box>

            {/* header */}

            <ExpenseHeader/>

            <Typography variant="body1" component="p"> Insights </Typography>

            

            {/* calendar */}

            {/* WeeklyInsight or MonthlyInsight component */}

            {/* <PieChart/>

            <Top3/> */}

            <FooterNav/> 

        </Box>
    )
}

export default Insights