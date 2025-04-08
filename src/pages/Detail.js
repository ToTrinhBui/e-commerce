import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/detail.css';
import { products } from '../data';
import Footer from "../components/Footer";
import Focus from '../components/detail/Focus';
import ProductIn4 from '../components/detail/ProductIn4';
import Related from '../components/detail/Related';
import Loading from '../components/Loading'
import { Header } from '../components/Header';

export default function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.find((item) => item.id === id));
    }, [id])


    if (!product || !id) {
        return <Loading />;
    }

    return (
        <div className='page-container'>
            <Header />
            <div className='content-wrap'>
                <Focus data={product} />
                <ProductIn4 data={product} />
                <Related data={products} />
            </div>
            <Footer />
        </div>
    )
}