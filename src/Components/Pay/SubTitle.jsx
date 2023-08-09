import { Typography } from "@mui/material";
import PropTypes from "prop-types";
export default function SubTitle({ subTitle }) {
    return (
        <Typography
            sx={{
                fontSize: 24,
                fontWeight: 700,
                mb: 2,
                color: "myGray500.main",
            }}
        >
            {subTitle}
        </Typography>
    );
}
SubTitle.propTypes = {
    subTitle: PropTypes.string.isRequired,
};
