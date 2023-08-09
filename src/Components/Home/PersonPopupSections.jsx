import { Add, Remove } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
export function ComponentSection1({
    image,
    title,
    subTitle,
    imgWidth,
    mlSubtitle,
}) {
    return (
        <>
            <Stack direction={"column"}>
                <Stack direction={"row"} columnGap={1}>
                    <Typography
                        component={"img"}
                        src={image}
                        width={imgWidth}
                        height={25}
                        alt="icon"
                    />
                    <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
                        {title}
                    </Typography>
                </Stack>
                <Typography
                    sx={{
                        ml: mlSubtitle,
                        fontWeight: 400,
                        color: "myGray300.main",
                    }}
                >
                    {subTitle}
                </Typography>
            </Stack>
        </>
    );
}
ComponentSection1.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    imgWidth: PropTypes.number.isRequired,
    mlSubtitle: PropTypes.number.isRequired,
};
const styleButton = {
    p: 0,
    height: 40,
    minWidth: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to top, #b6912100, #edc43175, #FFE169);",
};
export function ComponentSection2({ OnRemove, value, OnAdd }) {
    return (
        <>
            <Stack
                direction={"row"}
                columnGap={3}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    columnGap: {
                        xs: 1,
                        sm: 3,
                    },
                }}
            >
                <Button variant="text" sx={styleButton} onClick={OnRemove}>
                    <Remove
                        sx={{
                            color: "#000",
                            fontWeight: 600,
                        }}
                    />
                </Button>
                <div className="font-semibold text-3xl">{value}</div>
                <Button variant="text" sx={styleButton} onClick={OnAdd}>
                    <Add
                        sx={{
                            color: "#000",
                            fontWeight: 600,
                        }}
                    />
                </Button>
            </Stack>
        </>
    );
}
ComponentSection2.propTypes = {
    OnRemove: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    OnAdd: PropTypes.func.isRequired,
};
