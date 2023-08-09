// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CommetWithSwiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import user from "../../assets/images/user.png";

import { Stack, Typography } from "@mui/material";
export default function CommetWithSwiper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper2"
            >
                {Array.from(Array(6)).map((_, index) => (
                    <SwiperSlide key={index}>
                        <Stack
                            justifyContent={"center"}
                            gap={2}
                            sx={{
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: { xs: "center", sm: "start" },
                            }}
                        >
                            <Typography
                                component={"img"}
                                width={70}
                                height={70}
                                src={user}
                                alt="user"
                            />
                            <Typography
                                component={"div"}
                                sx={{
                                    opacity: "100%",
                                    textAlign: "start",
                                    color: "myGray500.main",
                                    fontSize: 12,
                                }}
                            >
                                <Typography sx={{ fontWeight: 400 }}>
                                    “But I must explain to you how all this
                                    mistaken idea of denouncing pleasure and
                                    praising pain was born and I will give you a
                                    complete account of the system and expound
                                    the actual teachings of the great explorer
                                    of the truth.”
                                </Typography>
                                <Typography sx={{ fontWeight: 300 }}>
                                    GINA AGASA,USA.
                                </Typography>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
