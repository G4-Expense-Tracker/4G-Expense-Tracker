import { Box } from "@mui/material";
import Header from "../Header";
import FooterNav from "../../Footer/FooterNav";
import ListItem from "./listItem";

function Notification() {

    const notifs = [
        "Spending Alert",
        "Daily Check-In",
        "Goal Progress",
        "Insight Updates",
        "Tree Growth"
    ]
    return (
        <Box>

            <Header title="Notifications" />

            {notifs.map((notif, index) => (
                <ListItem
                    key={index}
                    notification={notif}
                />
            ))}

            <FooterNav />

        </Box>
    )
}

export default Notification