import { Link } from "react-router-dom";
import amico from "../../assets/images/svg/amico.svg";
import { Container, Stack, Typography } from "@mui/material";
import { Button4 } from "../ButtonCustom";
export default function PaySection() {
    return (
        <>
            <Container
                maxWidth={"xl"}
                sx={{ backgroundColor: "myGray300.main" }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap-reverse"}
                    sx={{ py: 7 }}
                >
                    <Typography
                        component={"div"}
                        sx={{ color: "primary.main" }}
                    >
                        <Typography
                            component={"div"}
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: 40, lg: 70 },
                                mb: 5,
                            }}
                        >
                            pay your all bills online
                        </Typography>
                        <Typography
                            component={"div"}
                            sx={{
                                maxWidth: 670,
                                fontWeight: 600,
                                fontSize: 20,
                                mb: 5,
                            }}
                        >
                            for shopping, groceries, restaurants, movie tickets
                            booking, flight tickets booking, rent, tuition,
                            utilities, loans
                        </Typography>
                        <Typography
                            component={"div"}
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: 25, lg: 30 },
                                mb: 5,
                            }}
                        >
                            Simple, Fast & Safe
                        </Typography>
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            columnGap={7}
                        >
                            <Button4>Get our app</Button4>
                            <Link to={"/pay"}>
                                <Button4>Pay online now</Button4>
                            </Link>
                        </Stack>
                    </Typography>
                    <Typography
                        component={"img"}
                        src={amico}
                        sx={{
                            mx: { xs: "auto", lg: 0 },
                            width: { xs: 320, lg: "auto" },
                            pb: { xs: 8, lg: 0 },
                        }}
                    ></Typography>
                </Stack>
            </Container>
        </>
    );
}
