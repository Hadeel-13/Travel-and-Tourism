import logoGray from "../../assets/images/svg/logoGray.svg";
import { Stack, Typography, IconButton, Tooltip } from "@mui/material";
import { ForwardToInbox, GitHub, LinkedIn, PhoneInTalk } from "@mui/icons-material";
export default function Footer() {
    const informations = [
        {
            title: "Menu",
            links: ["Home", "Explore", "Travel", "Blog", "Pricing"],
        },
        {
            title: "Information",
            links: [
                "Destinations",
                "Supports",
                "Terms & Conditions",
                "Privacy",
            ],
        },
        {
            title: "Contact Info",
            links: [
                "+963 998 630 508",
                "hadeel13ibrahim@gmail.com",
                "20000, Aleppo, Syria",
            ],
        },
    ];
    const socialIcons = [
        {
            title: "My Phone",
            href: "tel:+963998630508",
            icon: <PhoneInTalk />,
        },
        {
            title: "My Email",
            href: "mailto:hadeel13ibrahim@gmail.com",
            icon: <ForwardToInbox />,
        },
        {
            title: "My GitHub",
            href: "https://github.com/Hadeel-13",
            icon: <GitHub />,
        },
        {
            title: "My LinkedIn",
            href: "https://www.linkedin.com/in/hadeel-i-5560851ba/",
            icon: <LinkedIn />,
        },
    ];
    return (
        <>
            <span id="/contact">
                <Typography
                    component={"div"}
                    sx={{
                        backgroundColor: "#343A40",
                        color: "#fff",
                        px: 5,
                        pb: 3,
                    }}
                >
                    <Stack
                        gap={3}
                        sx={{ py: 5 }}
                        direction={"row"}
                        flexWrap={"wrap"}
                        alignItems={"start"}
                        justifyContent={"space-between"}
                    >
                        {informations?.map((info, i) => (
                            <Typography key={i} component={"div"}>
                                <Typography
                                    component={"div"}
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: 24,
                                        mb: 2,
                                    }}
                                >
                                    {info.title}
                                </Typography>
                                {info.links?.map((link, index) => (
                                    <Typography
                                        key={index}
                                        component={"div"}
                                        sx={{ mb: 0.7 }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Typography>
                        ))}
                        <Typography component={"div"}>
                            <Typography
                                component={"div"}
                                sx={{ fontWeight: 500, fontSize: 24, mb: 2 }}
                            >
                                Contact me via
                            </Typography>
                            <Stack
                                direction={"row"}
                                flexWrap={"wrap"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={2}
                            >
                                {socialIcons?.map((_) => (
                                    <Tooltip key={_.href} title={_.title}>
                                        <a
                                            href={_.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <IconButton
                                                color="inherit"
                                                aria-label="add to shopping cart"
                                            >
                                                {_.icon}
                                            </IconButton>
                                        </a>
                                    </Tooltip>
                                ))}
                            </Stack>
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={2}
                    >
                        <Typography component={"div"}>
                            <Stack
                                alignSelf={"end"}
                                direction={"row"}
                                alignItems={"end"}
                            >
                                <Typography
                                    component={"img"}
                                    src={logoGray}
                                    alt="logo"
                                ></Typography>
                                <Typography
                                    component={"div"}
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: 50,
                                        translate: "-35px 20px",
                                    }}
                                >
                                    Travel
                                </Typography>
                            </Stack>
                        </Typography>
                        <Typography
                            component={"div"}
                            sx={{ fontWeight: 400, fontSize: 14 }}
                        >
                            Copyright © Travel 2023 All rights reserved
                        </Typography>
                        <Typography component={"div"}></Typography>
                    </Stack>
                </Typography>
            </span>
        </>
    );
}
