import creditCard1 from "../../assets/images/payment/credit-card1.png";
import creditCard2 from "../../assets/images/payment/credit-card2.png";
import creditCard3 from "../../assets/images/payment/credit-card3.png";
import creditCard4 from "../../assets/images/payment/credit-card4.png";
import creditCard5 from "../../assets/images/payment/credit-card5.png";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { InputCustom2 } from "../InputCustom";
import SubTitle from "./SubTitle";
import InputsSection from "./InputsSection";
import { Button5 } from "../ButtonCustom";

export default function PaySection2() {
    const InputsSection1 = [
        {
            lebel: "First name",
            placeholder: "Enter your first name...",
            type: "text",
            id: "firstname",
        },
        {
            lebel: "Last name",
            placeholder: "Enter your last name...",
            type: "text",
            id: "lastname",
        },
        {
            lebel: "Email",
            placeholder: "Enter your Email...",
            type: "email",
            id: "email",
        },
        {
            lebel: "Phone number",
            placeholder: "Enter your Phone number...",
            type: "text",
            id: "phonenumber",
        },
    ];
    const InputsSection2 = [
        {
            lebel: "Card holder name",
            placeholder: "Enter your first name...",
            type: "text",
            id: "cardName",
        },
        {
            lebel: "Card number",
            placeholder: "Enter your Card number...",
            type: "text",
            id: "cardNumber",
        },
        {
            lebel: "CVV",
            placeholder: "Example: 4567",
            type: "text",
            id: "cvv",
        },
        {
            lebel: "Expiration Date",
            placeholder: "MM/YY",
            type: "text",
            id: "expirationDate",
        },
    ];
    const InputsSection3 = [
        {
            lebel: "City",
            placeholder: "Your city...",
            type: "text",
            id: "city",
        },
        {
            lebel: "State",
            placeholder: "Your state...",
            type: "text",
            id: "state",
        },
        {
            lebel: "Landmark",
            placeholder: "Any landmark (famous place or mall)",
            type: "text",
            id: "landmark",
        },
        {
            lebel: "Postal code",
            placeholder: "ZIP Code (231216)",
            type: "text",
            id: "postalCode",
        },
    ];
    return (
        <Box
            sx={{
                p: { xs: 1, md: 5 },
                minHeight: 1080,
                width: "100%",
                backgroundColor: "#f7f7fb",
            }}
        >
            {/* <GlobalStyles styles={{ div: { color: "#fff" } }} /> */}
            <Typography sx={{ fontSize: 50, fontWeight: 800, mb: 3 }}>
                Complete your order
            </Typography>
            <SubTitle subTitle="Personal Details" />
            <InputsSection InputsSection={InputsSection1} />
            <SubTitle subTitle="Payment Details" />
            <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
                {[
                    creditCard1,
                    creditCard2,
                    creditCard3,
                    creditCard4,
                    creditCard5,
                ]?.map((creditCard, i) => (
                    <Typography
                        key={i}
                        component={"img"}
                        src={creditCard}
                        width={70}
                        height={48}
                        sx={{ mb: 2 }}
                    ></Typography>
                ))}
            </Stack>
            <InputsSection InputsSection={InputsSection2} />
            <SubTitle subTitle="Shipping Address" />
            <InputCustom2
                lebel="Address line 1"
                placeholder="Your Complete address..."
                type="text"
                id="addressline"
            />
            <InputsSection InputsSection={InputsSection3} />
            <Grid
                container
                columnSpacing={{ xs: 2, md: 3 }}
                flexWrap={"wrap-reverse"}
                rowSpacing={2}
            >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Link to={"/"}>
                        <Button5 color="secondary">Cancel</Button5>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Link to={"/"}>
                        <Button5 color="primary">Complete Purchase</Button5>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
