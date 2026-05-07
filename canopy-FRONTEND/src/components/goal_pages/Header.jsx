import { Grid, Typography, Container } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

function Header({ name }) {

    const ArrowLeft = () => {
        /* previous goal callback */
    }
    const ArrowRight = () => {
        /* next goal callback */
    }
    const handleDots = () => {
        /* dot menu */
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
                    size={8}
                    sx={{

                    }}>

                    <Typography variant="h4" component="h1"
                        sx={{
                            textAlign: "center"
                        }}>
                        {name}
                    </Typography>

                </Grid>

                <Grid
                    size={4}
                >
                    <MoreHorizIcon
                    sx={{
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
                        onClick={ArrowLeft}
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
                        onClick={ArrowRight}
                        />
                </Grid>

            </Grid>

        </Container>
    )
}

export default Header