import BannerIbukota from "../component/BannerIbukota";
import BannerMpr from "../component/BannerMpr";
import Carousels from "../component/Carousels";
import CarouselsBawah from "../component/CarouselsBawah";
import ContentSlider from "../component/ContentSlider";
import Ekonomi from "../component/Ekonomi";
import Footer from "../component/Footer";
import Humaniora from "../component/Humaniora";
import InfoGrafik from "../component/InfoGrafik";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";
import Olahraga from "../component/Olahraga";
import PilihEditor from "../component/PilihEditor";
import Politik from "../component/Politik";
import Tekno from "../component/Tekno";
import Terkini from "../component/Terkini";

function Beranda () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <Carousels />
            <Politik />
            <CarouselsBawah />
            <Ekonomi />
            <Footer />
        </>
    );
}

export default Beranda;