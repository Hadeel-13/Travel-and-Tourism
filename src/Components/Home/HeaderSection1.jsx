import { Box, Stack, Typography } from "@mui/material";
import video from "../../assets/images/svg/video.svg";
import { Button3 } from "../ButtonCustom";
export default function HeaderSection1() {
    return (
        <>
            <Box>
                <Stack sx={{ mx: 3, width: "auto", gap: { xs: 1, sm: 5 } }}>
                    <Typography
                        component={"div"}
                        sx={{
                            width: { md: 730 },
                            fontWeight: 700,
                            fontSize: { xs: 30, sm: 50, lg: 70 },
                        }}
                    >
                        <Typography
                            component={"span"}
                            sx={{
                                color: "primary.main",
                                fontWeight: 700,
                                fontSize: { xs: 35, sm: 50, lg: 70 },
                            }}
                        >
                            Discover{" "}
                        </Typography>
                        the Secrets of the Earth!
                    </Typography>
                    <Typography
                        sx={{
                            width: { sm: 390 },
                            fontWeight: 400,
                            fontSize: { xs: 15, sm: 20 },
                        }}
                    >
                        Share your favorite travel destination and we will
                        feature it in our next blog!
                    </Typography>
                    <Stack
                        direction={"row"}
                        flexWrap={"wrap-reverse"}
                        gridColumn={1}
                        rowGap={2}
                        sx={{
                            justifyContent: { xs: "center", sm: "start" },
                        }}
                    >
                        <Button3
                            color="primary"
                            variant="contained"
                            colorText="#fff"
                        >
                            Share Your story
                        </Button3>
                        <Button3
                            color="secondary"
                            variant="text"
                            colorText="#000"
                        >
                            <Typography
                                component={"img"}
                                src={video}
                                alt="video"
                                sx={{ mr: 1 }}
                            />
                            {" Watch highlight"}
                        </Button3>
                    </Stack>
                    {/* </div> */}
                </Stack>
            </Box>
        </>
    );
}
