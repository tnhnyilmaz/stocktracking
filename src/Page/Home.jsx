import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from '../Components/Content/Content';
import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbar/Navbar';
import ProductAdd from '../Components/ProductAdd/ProductAdd';
import './Home.css'; // CSS dosyasını ekleyin

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-1/5 h-screen'>
                <Dashboard />
            </div>
            <div className='w-4/5 h-screen '>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/add-product" element={<ProductAdd />} /> {/* Yeni sayfa rotasını ekleyin */}
                </Routes>
            </div>
        </div>
    )
}

export default Home