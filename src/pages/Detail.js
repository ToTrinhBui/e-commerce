import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/detail.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Focus from '../components/detail/Focus';
import ProductIn4 from '../components/detail/ProductIn4';
import Related from '../components/detail/Related';
import Loading from "../components/Loading";

export default function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://172.29.118.113:6001/product/${id}`);
                const data = response.data.data;
                setProduct(data);
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://172.29.118.113:6001/getproduct/');
                const data = response.data.data;
                setProducts(data);
                
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    if (products.length === 0 || !product) {
        return <Loading />;
    }

    return (
        <>
            <HeadingBar />
            <Navbar />
            <Focus data={product} />
            <ProductIn4 data={product} />
            <Related data={products} />
            <Footer />
        </>
    )
}