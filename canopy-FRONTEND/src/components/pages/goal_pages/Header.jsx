import { Grid, Typography, Container } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

function Header({ name, previousGoal, nextGoal, handleDots:handleDotsProp }) {

    const handleDots = () => {
        /* dot menu */
        /* Using Ava's Pre existing Code add the additional functionalities by the Last Minutes request from Design Team */
        if (typeof handleDotsProp === "function") {
        handleDotsProp()
        }
    }


    return (
        <Container maxWidth="sm" sx={{
            paddingTop: "4rem",
        }}>

            {/*             TOP ROW            */}
            <Grid
                container
                spacing={2}

                sx={{
                    paddingBottom: "4rem"
                }}
            >

                <Grid
                    size={10}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingLeft: "4rem"

                    }}>

                    <Typography variant="h4" component="h1"
                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            width: "100%"
                        }}>
                        {name}
                    </Typography>

                </Grid>

                <Grid
                    size={2}
                >
                    <MoreHorizIcon
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        fontSize:"2rem"
                    }}
                    onClick={handleDots}
                    />
                </Grid>

            </Grid>

            {/*             BOTTOM ROW            */}
            <Grid
                container
                sx={{
                }}
            >

                <Grid
                    size={2}
                    display="flex"
                    sx={{
                        paddingTop: "6rem"
                    }}
                >
                    <KeyboardArrowLeftIcon
                        sx={{
                            fontSize: "4rem"
                        }}
                        onClick={previousGoal}
                        />
                </Grid>

                <Grid
                    size={8}

                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingRight: "3rem"
                    }}
                >

                    <img
                        src="/onboarding_imgs/OB_IMG_4.png"
                        alt="sapling"
                        style={{
                            width: "100%",
                            maxWidth: "150px"
                        }}
                    />
                </Grid>

                <Grid
                    size={2}
                    display="flex"
                    sx={{
                        paddingTop: "6rem"
                    }}
                >
                    <KeyboardArrowRightIcon
                        sx={{
                            fontSize: "4rem"
                        }}
                        onClick={nextGoal}
                        />
                </Grid>

            </Grid>

        </Container>
    )
}

export default Header