import PropTypes from "prop-types";
import { ExpandMore, Close } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme1 = createTheme({
    components: {
        // Name of the component
        MuiPopover: {
            styleOverrides: {
                // Name of the slot
                paper: {
                    // Some CSS
                    backgroundColor: "#343a40e5",
                    padding: 15,
                },
            },
        },
    },
    palette: {
        mode: "dark",
    },
});
import {
    Box,
    Button,
    IconButton,
    Modal,
    Popover,
    Stack,
    Typography,
} from "@mui/material";

export function Button1({ children }) {
    return (
        <>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{
                    py: 1,
                    bgcolor: "#343A40",
                    boxShadow:
                        " 0px 3px 1px -2px rgb(243 243 243 / 20%), 0px 2px 2px 0px #D9D9D94D, 0px 1px 5px 0px #D9D9D94D;",
                    ":hover": {
                        bgcolor: "#343A40",
                        boxShadow:
                            " 0px 3px 1px -2px rgb(243 243 243 / 20%), 0px 2px 2px 0px #D9D9D94D, 0px 1px 5px 0px #D9D9D94D;",
                    },
                }}
            >
                {children}
            </Button>
        </>
    );
}
Button1.propTypes = {
    children: PropTypes.string.isRequired,
};
export function Button2({ children }) {
    return (
        <>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{
                    py: 1,
                    bgcolor: "#343A40",
                    boxShadow:
                        " 0px 3px 1px -2px rgb(243 243 243 / 20%), 0px 2px 2px 0px #D9D9D94D, 0px 1px 5px 0px #D9D9D94D;",
                    ":hover": {
                        bgcolor: "#343A40",
                        boxShadow:
                            " 0px 3px 1px -2px rgb(243 243 243 / 20%), 0px 2px 2px 0px #D9D9D94D, 0px 1px 5px 0px #D9D9D94D;",
                    },
                }}
            >
                {children}
            </Button>
        </>
    );
}
Button2.propTypes = {
    children: PropTypes.string.isRequired,
};
export function Button3({ children, variant, color, colorText }) {
    return (
        <>
            <Button
                variant={variant}
                color={color}
                sx={{
                    px: { sm: 5 },
                    color: colorText,
                    fontWeight: 600,
                    lineHeight: "24px",
                    borderRadius: "13px",
                    fontSize: { xs: "18px", sm: "20px" },
                }}
            >
                {children}
            </Button>
        </>
    );
}
Button3.propTypes = {
    children: PropTypes.any.isRequired,
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    colorText: PropTypes.string.isRequired,
};
export function Button4({ children }) {
    return (
        <>
            <Button
                sx={{
                    borderRadius: 13,
                    px: { xs: 2, sm: 4 },
                    py: { xs: 1, sm: 3 },
                    fontWeight: 600,
                    fontSize: { xs: 15, sm: 25 },
                    mb: 1,
                }}
                variant="contained"
            >
                {children}
            </Button>
        </>
    );
}
Button4.propTypes = {
    children: PropTypes.string.isRequired,
};
export function Button5({ children, color }) {
    return (
        <>
            <Button
                variant="contained"
                color={color}
                sx={{
                    width: "100%",
                    boxShadow: "none",
                    border: "1px #343A40 solid",
                }}
            >
                {children}
            </Button>
        </>
    );
}
Button5.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
export function Button6({ list, setValue }) {
    return (
        <>
            {list?.map((item, i) => (
                <Button
                    key={i}
                    color="primary"
                    variant="text"
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        color: "#fff",
                        ":hover": {
                            background:
                                "linear-gradient(to top, #b6912100, #edc43175, #FFE169);",
                        },
                        ":focus": {
                            background:
                                "linear-gradient(to top, #b6912100, #edc43175, #FFE169);",
                        },
                    }}
                    onClick={() => {
                        setValue(item);
                    }}
                >
                    {item}
                </Button>
            ))}
        </>
    );
}
Button6.propTypes = {
    list: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
};
export function ButtonWithPopup({
    lebel,
    children,
    id,
    value,
    handleClick,
    handleClose,
    anchorEl,
    sx,
}) {
    return (
        <>
            <Typography component={"div"}>
                <Typography
                    sx={{
                        color: "myGray500.main", //#767E86
                        mb: 0.5,
                    }}
                >
                    {lebel}
                </Typography>
                <Button
                    aria-describedby={id}
                    variant="text"
                    onClick={handleClick}
                    sx={{
                        px: 0,
                        width: "180px",
                        display: "flex",
                        borderRadius: 0,
                        justifyContent: "space-between",
                        borderBottom: "1px #000 solid",
                    }}
                >
                    <div>{value}</div>
                    <div>
                        <ExpandMore />
                    </div>
                </Button>
                <ThemeProvider theme={theme1}>
                    <Popover
                        id={id}
                        itemID={id}
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        sx={sx}
                    >
                        {children}
                    </Popover>
                </ThemeProvider>
            </Typography>
        </>
    );
}
ButtonWithPopup.propTypes = {
    children: PropTypes.element.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    anchorEl: PropTypes.any,
    lebel: PropTypes.string.isRequired,
    sx: PropTypes.any,
};
const style = {
    px: 6,
    top: "50%",
    left: { xs: "50%", lg: "75%" },
    height: { xs: 500, lg: "auto" },
    width: { xs: 300, sm: 400, lg: 540 },
    position: "absolute",
    transform: "translate(-50%, -50%)",
    bgcolor: "#343A40E5",
    boxShadow: 24,
    color: "#fff",
    borderRadius: 5,
    pb: 4,
    pt: 1,
    overflowY: { xs: "scroll", lg: "hidden" },
};
export function ButtonWithModal({
    color,
    title,
    children,
    id,
    open,
    onClick,
    onClose,
}) {
    return (
        <>
            <Button
                variant="contained"
                color={color}
                sx={{
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    boxShadow: "none",
                    border: "1px #000 solid",
                    py: 1,
                }}
                onClick={onClick}
            >
                {title}
            </Button>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby={id}
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction={"row"} justifyContent={"end"}>
                        <IconButton
                            onClick={onClose}
                            sx={{
                                bgcolor: " #6C757D",
                                borderTopLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                mr: -5,
                                ":hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            <Close />
                        </IconButton>
                    </Stack>
                    {children}
                </Box>
            </Modal>
        </>
    );
}
ButtonWithModal.propTypes = {
    children: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    open: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
