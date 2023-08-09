import SwiperHome from "../Components/Home/SwiperHome";
import HeaderHome from "../Components/Home/HeaderHome";
import DiscoverSection from "../Components/Home/DiscoverSection";
import AboutUsSection from "../Components/Home/AboutUsSection";
import { Container } from "@mui/material";
import ServicesSection from "../Components/Home/ServicesSection";
import PaySection from "../Components/Home/PaySection";
import NavBar from "../Components/Layout/NavBar";
import Footer from "../Components/Layout/Footer";

export default function Home() {
    
    return (
        <>
            <NavBar />
            <div className="relative" id="/booking">
                <SwiperHome />
                <div className="absolute top-0 z-10 w-full h-[925px] my-auto flex flex-col justify-center items-center ">
                    <HeaderHome />
                </div>
            </div>
            <Container sx={{ maxWidth: 1200 }}>
                <DiscoverSection />
            </Container>
            <AboutUsSection />
            <ServicesSection />
            <PaySection />
            <Footer />
        </>
    );
}
