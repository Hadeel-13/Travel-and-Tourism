// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperHome.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import slider1 from "../../assets/images/locations/Slider1.png";
import slider2 from "../../assets/images/locations/Slider2.png";
import slider3 from "../../assets/images/locations/Slider3.png";
import slider4 from "../../assets/images/locations/Slider4.png";
export default function SwiperHome() {
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="slider2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="slider3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="slider1" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
