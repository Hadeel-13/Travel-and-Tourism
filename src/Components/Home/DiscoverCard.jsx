import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
export default function DiscoverCard({ image, title, subTitle }) {
    return (
        <Card
            sx={{
                width: { xs: "auto", sm: 270 },
                height: 410,
                boxShadow: "none",
            }}
        >
            <CardMedia
                sx={{
                    width: { xs: "auto", sm: 270 },
                    height: 320,
                    borderRadius: 5,
                }}
                image={image}
                title={title}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: 20, md: 30 },
                        color: "#343A40",
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: 14, md: 18 },
                        color: "#6C757D",
                    }}
                >
                    {subTitle}
                </Typography>
            </CardContent>
        </Card>
    );
}
DiscoverCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};
