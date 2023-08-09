import mapImage from "../../assets/images/Map.png";
import { Typography, Stack, Box } from "@mui/material";
import CommetWithSwiper from "./CommetWithSwiper";
export default function AboutUsSection() {
    return (
        <>
            {" "}
            <span id="/about">
                <Box
                    sx={{
                        mr: { xs: 1, sm: 0 },
                        ml: { xs: 1, md: 8 },
                        position: "relative",
                    }}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"start"}
                        sx={{
                            flexWrap: { xs: "wrap", lg: "nowrap" },
                            justifyContent: {
                                xs: "center",
                                lg: "space-between",
                            },
                        }}
                    >
                        <Typography
                            component={"div"}
                            sx={{
                                minWidth: { xs: "200px", md: "280px" },
                                fontWeight: 600,
                                fontSize: 30,
                            }}
                        >
                            See what{" "}
                            <Typography
                                component={"span"}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: 30,
                                    color: "myGray500.main",
                                }}
                            >
                                travelers,
                            </Typography>
                            <br />
                            says about us
                        </Typography>
                        <Box sx={{ height: { xs: 400, sm: "auto" } }}>
                            <Typography
                                component={"img"}
                                src={mapImage}
                                alt="map"
                            />
                        </Box>
                    </Stack>
                    <Box
                        sx={{
                            top: { xs: "30%", sm: "25%" },
                            px: 3,
                            position: "absolute",
                            borderRadius: 7,
                            background:
                                "linear-gradient(180.81deg, rgba(182, 145, 33, 0.2) 0.69%, rgba(237, 197, 49, 0.538542) 54.35%, rgba(255, 225, 105, 0) 116.96%)",
                            width: { xs: "100%", sm: 500 },
                        }}
                    >
                        <CommetWithSwiper />
                    </Box>
                </Box>
            </span>
        </>
    );
}
