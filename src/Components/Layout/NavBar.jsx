import logo from "../../assets/images/svg/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { InputCustom1 } from "../InputCustom";
import {
    Menu,
    Toolbar,
    AppBar,
    Container,
    Tooltip,
    MenuItem,
    Button,
    Box,
    Typography,
    IconButton,
    Stack,
    FormGroup,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { Button1, ButtonWithModal } from "../ButtonCustom";
const pages = [
    { title: "Home", link: "/home" },
    { title: "Services", link: "/services" },
    { title: "Booking", link: "/booking" },
    { title: "Contact Us", link: "/contact" },
    { title: "About Us", link: "/about" },
];
export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    //LogIn
    const [openModalLogin, setOpenModalLogin] = useState(false);
    const handleOpenModalLogin = () => setOpenModalLogin(true);
    const handleCloseModalLogin = () => setOpenModalLogin(false);
    //Sign Up
    const [openModalSignUp, setOpenModalSignUp] = useState(false);
    const handleOpenModalSignUp = () => setOpenModalSignUp(true);
    const handleCloseModalSignUp = () => setOpenModalSignUp(false);
    return (
        <AppBar color="inherit" position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                        <Typography
                            id="/home"
                            component={"img"}
                            src={logo}
                            alt="logo"
                        />
                    </Box>
                    <Link to={"/"}>
                        <Typography
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "none", lg: "flex" },
                                fontWeight: 800,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "3rem",
                                lineHeight: "4rem",
                                translate: "-35px 0px",
                                flexGrow: 1,
                            }}
                        >
                            Travel
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", lg: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", lg: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.title}
                                    onClick={() => {
                                        setTimeout(() => {
                                            document
                                                .getElementById(`${page.link}`)
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "center",
                                                });
                                        }, 0.1);

                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", lg: "none" },
                            width: { xs: "70px", md: "auto" },
                        }}
                    >
                        <img src={logo} alt="logo" />
                    </Box>
                    <Link to={"/"}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "flex", lg: "none" },
                                fontWeight: 800,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: { xs: "1.5rem", md: "3rem" },
                                lineHeight: { xs: "2rem", md: "4rem" },
                                translate: "-35px 0px",
                            }}
                            className="text-2xl "
                        >
                            Travel
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    ></Box>
                    <Box
                        sx={{
                            display: { xs: "none", lg: "flex" },
                            flexGrow: 1,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                onClick={() => {
                                    document
                                        .getElementById(`${page.link}`)
                                        .scrollIntoView({
                                            behavior: "smooth",
                                            block: "center",
                                        });
                                }}
                                sx={{
                                    my: 2,
                                    pb: "3px",
                                    display: "block",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    lineHeight: "1.5rem",
                                    transition: "all 0.3s linear",
                                    position: "relative",
                                    ":hover": {
                                        backgroundColor: "transparent",
                                    },
                                    "::after": {
                                        //effect1
                                        // content: '""',
                                        // width: 0,
                                        // height: "2px",
                                        // backgroundColor: "InfoText",
                                        // margin: "auto",
                                        // display: "block",
                                        //effect2
                                        content: '""',
                                        height: "2px",
                                        width: 0,
                                        left: "10px",
                                        bottom: "-3px",
                                        position: "absolute",
                                        background:
                                            "linear-gradient( to right,#B69121, #edc43175)",
                                        transition: "0.3s",
                                    },
                                    ":hover::after": {
                                        //effect1
                                        // width: "100%",
                                        //effect2
                                        width: "30px",
                                    },
                                    ml: 1,
                                }}
                                className="hover:bg-gradient-to-b hover:from-[#B69121] hover:via-[#edc531] hover:to-[#FFE169] hover:bg-clip-text hover:text-transparent"
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: "flex", lg: "none" },
                        }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem
                                onClick={() => {
                                    handleCloseUserMenu();
                                    handleOpenModalLogin();
                                }}
                            >
                                <Typography textAlign="center">
                                    <LoginIcon color="primary" /> Log In
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleCloseUserMenu();
                                    handleOpenModalSignUp();
                                }}
                            >
                                <Typography textAlign="center">
                                    <AddCircleOutlineIcon color="primary" />{" "}
                                    Sign Up
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                        columnGap={1}
                        sx={{ display: { xs: "none", lg: "flex" } }}
                    >
                        <ButtonWithModal
                            color="secondary"
                            title="Sign Up"
                            open={openModalSignUp}
                            onClick={handleOpenModalSignUp}
                            onClose={handleCloseModalSignUp}
                            id="modal-modal-title"
                        >
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                <Stack
                                    direction={"row"}
                                    justifyContent={"center"}
                                >
                                    <div className="font-semibold text-3xl">
                                        Registration
                                    </div>
                                </Stack>
                            </Typography>
                            <form>
                                <div className="my-10">
                                    <InputCustom1
                                        type="text"
                                        id="name"
                                        placeholder="User Name"
                                        lebel="Enter your Name"
                                    />
                                    <InputCustom1
                                        type="text"
                                        id="email"
                                        placeholder="Email"
                                        lebel="Enter your email address"
                                    />
                                    <InputCustom1
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        lebel="Enter your Password"
                                    />
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    defaultChecked
                                                    color="warning"
                                                    sx={{
                                                        color: "#fff",
                                                        "&.Mui-checked": {
                                                            color: "#fff",
                                                        },
                                                    }}
                                                />
                                            }
                                            label="I agree to the terms & Conditions"
                                        />
                                    </FormGroup>
                                </div>
                                <Button1>Sign Up</Button1>
                            </form>
                        </ButtonWithModal>
                        <ButtonWithModal
                            color="primary"
                            title="Log In"
                            open={openModalLogin}
                            onClick={handleOpenModalLogin}
                            onClose={handleCloseModalLogin}
                            id="modal-modal-title"
                        >
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    flexWrap={"wrap"}
                                    gap={3}
                                >
                                    <div>Welcome to Log in</div>
                                    <Stack direction={"column"}>
                                        <div className="font-normal text-base text-myGray200">
                                            No Account?
                                        </div>
                                        <Button
                                            variant="text"
                                            onClick={() => {
                                                handleCloseModalLogin();
                                                handleOpenModalSignUp();
                                            }}
                                        >
                                            <div className="font-normal text-base text-myGray500">
                                                Sign Up
                                            </div>
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Typography>
                            <form>
                                <div className="my-24">
                                    <InputCustom1
                                        id="userNameEmail"
                                        placeholder=""
                                        lebel="Enter your username or email address"
                                        type="text"
                                    />
                                    <InputCustom1
                                        id="password"
                                        placeholder=""
                                        lebel="Enter your Password"
                                        type="password"
                                    />
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        flexWrap={"wrap"}
                                        gap={3}
                                    >
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        color="warning"
                                                        sx={{
                                                            color: "#fff",
                                                            "&.Mui-checked": {
                                                                color: "#fff",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label="Remember me"
                                            />
                                        </FormGroup>
                                        <div className="font-normal text-base">
                                            Forget password
                                        </div>
                                    </Stack>
                                </div>
                                <Button1>Sign In</Button1>
                            </form>
                        </ButtonWithModal>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
