import logoGray from "../../assets/images/svg/logoGray.svg";
import Extra from "../../assets/images/locations/image1.jpg";
import Dubai from "../../assets/images/locations/image2.jpg";
import { Box, Stack, Typography } from "@mui/material";
import TravelCard from "./TravelCard";

export default function PaySection1() {
    const PackageTravel = [
        {
            image: Dubai,
            title: "Dubai",
            //Details
            keys: ["adult", "star", "Total Price"],
            values: ["3", "1", "$50"],
        },
        {
            image: Extra,
            title: "extra",
            keys: ["booking hotel", "rooms", "Total Price"],
            values: ["3", "4", "$250"],
        },
    ];
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    p: { xs: 1, md: 5 },
                    minHeight: 1080,
                    minWidth: { xs: "100%", lg: "600px" },
                    backgroundColor: "primary.main",
                }}
            >
                <Stack direction={"column"} sx={{ mb: 17 }}>
                    <Stack direction={"row"}>
                        <Typography
                            component={"img"}
                            src={logoGray}
                            alt="logo"
                        ></Typography>
                        <Typography
                            component={"div"}
                            sx={{
                                fontSize: 50,
                                fontWeight: 800,
                                color: "#fff",
                                translate: "-35px 0",
                            }}
                        >
                            Travel
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                            mt: 13,
                            fontSize: { xs: 40, sm: 50 },
                            fontWeight: 800,
                            color: "#fff",
                        }}
                    >
                        Package Travel
                    </Typography>
                    {PackageTravel?.map((item, i) => (
                        <TravelCard key={i} PackageTravel={item} />
                    ))}
                </Stack>
                <Typography
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        pb: 5,
                        color: "#fff",
                        fontSize:{ xs: 27, sm: 37 },
                        fontWeight: 700,
                    }}
                    component={"div"}
                >
                    Total bill
                </Typography>
                <Typography
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        mr: 5,
                        mb: 5,
                        color: "#fff",
                        fontSize: { xs: 27, sm: 37 },
                        fontWeight: 700,
                    }}
                    component={"div"}
                >
                    $300/-
                </Typography>
            </Box>
        </>
    );
}
