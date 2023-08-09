import car from "../../assets/images/icons/CarOutlined.png";
import check from "../../assets/images/icons/CheckCircleOutlined.png";
import contact from "../../assets/images/icons/ContactsOutlined.png";
import like from "../../assets/images/icons/Like.png";
import { Box, Container, Grid, Typography } from "@mui/material";
export default function ServicesSection() {
    const services = [
        { icon: car, content: "100+ tours around Rwanda" },
        { icon: check, content: "100% Trusted travel agency" },
        { icon: contact, content: "10 years of travel experience" },
        { icon: like, content: "90% of travelors are happy" },
    ];
    return (
        <>
            <Typography
                component={"div"}
                sx={{
                    my: 10,
                    fontWeight: 800,
                    fontSize: { xs: 30, sm: 50 },
                    textAlign: "center",
                }}
            >
                What{" "}
                <Typography
                    component={"span"}
                    sx={{
                        color: "myGray500.main",
                        fontWeight: 800,
                        fontSize: { xs: 30, sm: 50 },
                    }}
                >
                    services,
                </Typography>{" "}
                We Give You!
            </Typography>
            <span id="/services">
                <Container maxWidth={"lg"} sx={{ mb: 10 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {services?.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Box
                                    sx={{
                                        width: { xs: "auto", lg: 250 },
                                        height: 150,
                                        backgroundColor: "#6C757D",
                                        borderRadius: 7,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                        rowGap: 2,
                                    }}
                                >
                                    <Typography
                                        component={"img"}
                                        width={50}
                                        height={50}
                                        src={service.icon}
                                        alt={`service icon${index}`}
                                    />
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: 16,
                                            width: 200,
                                            textAlign: "center",
                                        }}
                                    >
                                        {service.content}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </span>
        </>
    );
}
