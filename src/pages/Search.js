import React, { useEffect, useState } from 'react'
import '../style/index.css';
import '../style/productList.css';
import { products } from "../data";
import Footer from "../components/Footer";
import Grid from "../components/productList/Grid";
import Title from "../components/productList/Title";
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';

const Search = () => {
    const [filteredResults, setFilteredResults] = useState(products);
    const searchParams = useLocation().search.slice(1);

    useEffect(() => {
        if (searchParams !== '') {
            const filteredData = products.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchParams.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(products)
        }
    }, [searchParams])

    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <Title title='Searching' />
                <Grid data={filteredResults} />
            </div>
            <Footer />
        </div>
    )
}

export default Search