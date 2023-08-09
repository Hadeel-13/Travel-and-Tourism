import { Stack } from "@mui/material";
import PaySection1 from "../Components/Pay/PaySection1";
import PaySection2 from "../Components/Pay/PaySection2";

export default function PayOnline() {
    return (
        <Stack
            direction={"row"}
            sx={{ flexWrap: { xs: "wrap", lg: "nowrap" }, width: "100%" }}
        >
            <PaySection1 />
            <PaySection2 />
        </Stack>
    );
}
