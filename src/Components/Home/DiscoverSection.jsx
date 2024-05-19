import image1 from "../../assets/images/locations/Iceland.jpg";
import image2 from "../../assets/images/locations/Italy.jpg";
import image3 from "../../assets/images/locations/Patagonia.jpg";
import image4 from "../../assets/images/locations/Dubai.jpg";
import DiscoverCard from "./DiscoverCard";

import { Grid, Typography } from "@mui/material";

export default function DiscoverSection() {
    const locations = [
        { image: image1, title: "Iceland", subTitle: "Discover" },
        { image: image2, title: "Italy", subTitle: "Discover" },
        { image: image3, title: "Patagonia", subTitle: "Discover" },
        { image: image4, title: "Dubai", subTitle: "Discover" },
    ];
    return (
        <>
            <Typography component={"div"} sx={{ my: 10, textAlign: "center" }}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: 16, md: 20 },
                        color: "myGray500.main",
                    }}
                >
                    Join our adventures
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: 30, md: 50 },
                        color: "primary.main",
                    }}
                >
                    Discover the world with us
                </Typography>
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 13 }}>
                {locations?.map((location, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <DiscoverCard
                            image={location.image}
                            title={location.title}
                            subTitle={location.subTitle}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
