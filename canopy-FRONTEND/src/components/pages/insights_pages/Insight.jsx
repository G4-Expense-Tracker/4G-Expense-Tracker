import { Box, Typography } from "@mui/material"
import FooterNav from "../../Footer/FooterNav"
import ExpenseHeader from "../../headers/ExpenseHeader"
import Top3 from "./top3/Top3"
import {LocalizationProvider} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

function Insights(){
    return(
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "background.default",
                display: "flex",
                justifyContent: "center",
            }}
            >
                  <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          backgroundColor: "background.default",
          position: "relative",
          overflowX: "hidden",
          px: { xs: "18px", sm: "24px" },
          pt: "24px",
          pb: "120px",
        }}
      >
                <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "40px",
            px: "4px",
          }}
        ></Box>
                <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: "28px", sm: "35px" },
            mb: "28px",
          }}
        ></Box>
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
        </Box>

    )
}

export default Insights