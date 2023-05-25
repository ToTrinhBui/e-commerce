import HeadingBar from "../components/HeadingBar";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Promotion from "../components/home/Promotion";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/home.css';
import Service from "../components/Service";
import Category from "../components/home/Category";
import Update from "../components/home/Update";
import Footer from "../components/Footer";
import Unique from "../components/home/Unique";

export default function Home(){
    return(
        <>
            <HeadingBar />
            <Navbar />
            <Promotion />
            <FeaturedProduct />
            <Update/>
            <Category />
            <Unique />
            <Service />
            <Footer/>
        </>
    )
}