import { Stack } from "@mui/material";
import HeaderSection1 from "./HeaderSection1";
import HeaderSection2 from "./HeaderSection2";

export default function HeaderHome() {
    return (
        <>
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ mb: { xs: 7, lg: 13 } }}
            >
                <HeaderSection1 />
            </Stack>
            <HeaderSection2 />
        </>
    );
}
