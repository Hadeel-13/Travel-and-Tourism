import { InputBase, InputLabel } from "@mui/material";
import PropTypes from "prop-types";

export function InputCustom1({ lebel, placeholder, type, id }) {
    return (
        <>
            <InputLabel htmlFor={id} sx={{ color: "#fff", mb: 1 }}>
                {lebel}
            </InputLabel>
            <InputBase
                id={id}
                fullWidth
                type={type}
                placeholder={placeholder}
                sx={{
                    p: 1.5,
                    color: "#808080",
                    border: "1px #fff solid",
                    borderRadius: 3,
                    outline: 0,
                    backgroundColor: "#343A40",
                    mb: 5,
                }}
            />
        </>
    );
}
InputCustom1.propTypes = {
    id: PropTypes.string.isRequired,
    lebel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export function InputCustom2({ lebel, placeholder, type, id }) {
    return (
        <>
            <InputLabel htmlFor={id} sx={{ color: "primary.main", mb: 1 }}>
                {lebel}
            </InputLabel>
            <InputBase
                id={id}
                fullWidth
                type={type}
                placeholder={placeholder}
                sx={{
                    mb: 2,
                    p: 1.5,
                    borderRadius: 1,
                    color: "#3F3F3F",
                    fontSize: 8,
                    fontWeight: 500,
                    backgroundColor: "#fff",
                }}
            />
        </>
    );
}
InputCustom2.propTypes = {
    id: PropTypes.string.isRequired,
    lebel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
