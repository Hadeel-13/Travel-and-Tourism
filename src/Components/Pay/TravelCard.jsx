import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function TravelCard({ PackageTravel }) {
    return (
        <Stack
            direction={"row"}
            gap={3}
            sx={{ mb: 3, flexDirection: { xs: "column", sm: "row" } }}
        >
            <Typography
                component={"img"}
                src={PackageTravel.image}
                width={{ xs: "auto", sm: 300 }}
                height={165}
            ></Typography>
            <Stack direction={"column"} width={"100%"}>
                <Typography
                    component={"p"}
                    sx={{
                        fontSize: { xs: 25, sm: 30 },
                        fontWeight: 600,
                        color: "#fff",
                    }}
                >
                    {PackageTravel.title}
                </Typography>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignContent={"start"}
                    alignItems={"start"}
                    maxWidth={"100%"}
                >
                    <Stack direction={"column"}>
                        {PackageTravel.keys?.map((key, i) => (
                            <Typography
                                key={i}
                                component={"div"}
                                sx={{
                                    fontSize: { xs: 15, sm: 20 },
                                    fontWeight: 600,
                                    color: "#fff",
                                }}
                            >
                                {key}
                            </Typography>
                        ))}
                    </Stack>
                    <Stack direction={"column"} alignItems={"end"}>
                        {PackageTravel.values?.map((value, i) => (
                            <Typography
                                key={i}
                                component={"div"}
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: "#fff",
                                }}
                            >
                                {value}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
TravelCard.propTypes = {
    PackageTravel: PropTypes.object.isRequired,
};
