import HeadingBar from "../components/HeadingBar";
import FeaturedProduct from "../components/Homepage/FeaturedProduct";
import Promotion from "../components/Homepage/Promotion";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/home.css';
import Service from "../components/Homepage/Service";
import Category from "../components/Homepage/Category";
import Update from "../components/Homepage/Update";
import Footer from "../components/Footer";
import Unique from "../components/Homepage/Unique";

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