import React, { useState } from 'react';
import { BsBuildingCheck } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Content = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const products = [
        {
            image: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-red-sports-car-png-image_9002705.png',
            name: 'ABC',
            status: '',
            price1: '10.000,00₺',
            price2: '17.000,00₺',
        },
        {
            image: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-red-sports-car-png-image_9002705.png',
            name: 'DENEME',
            status: 'DENEME',
            price1: '500,00₺',
            price2: '890,00₺',
        },
        {
            image: 'https://png.pngtree.com/png-clipart/20230325/original/pngtree-red-sports-car-png-image_9002705.png',
            name: 'sdd',
            status: '',
            price1: '-',
            price2: '5.280,00₺',
        },
    ];
    const handleAddProduct = () => {
        navigate('/add-product');
    };
    const handleStockUpdate=()=>{
        navigate('/stock-update')
    }
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className='bg-customPalette-lightest bg-opacity-50 w-full  h-full max-h-screen p-4 '>
            <div className='items-center flex gap-4'>
                <div className='relative w-4/6'>
                    <input clas
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="p-2 pr-10 border bg-customPalette-lightest w-full h-11  rounded-sm 8 bg-opacity-50 focus:outline-none focus:bg-white duration-300 focus:ring-0"
                    />
                    <IoSearchSharp className='absolute text-2xl right-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
                </div>
                <div onClick={handleAddProduct} className='w-1/6 h-11 bg-customPalette-yelllow items-center rounded-sm justify-center gap-2 pl-2 flex  hover:bg-opacity-60 duration-300'>
                    <FaPlus className='items-center text-lg justify-end' />
                    Ürün Ekle
                </div>
                <div onClick={handleStockUpdate} className='w-1/6 h-11 bg-customPalette-yelllow items-center rounded-sm justify-center gap-2 pl-2 flex hover:bg-opacity-60 duration-300'>
                    <BsBuildingCheck className='items-center text-xl justify-end' />
                    Stok Güncelle
                </div>
            </div>
            <div className='py-4'></div>
            <div className="">
                {products.map((product, index) => (
                    <div key={index} className="flex justify-between w-full items-center bg-white shadow-md rounded-lg p-4 mb-2">
                        <div className="flex items-center gap-4">
                            <img src={product.image} alt={product.name} className="w-12 h-12 object-cover" />
                            <div className="flex flex-col">
                                <span className="font-semibold">{product.name}</span>
                                {product.status && (
                                    <span className="text-xs bg-red-200 text-red-600 px-2 py-1 rounded-full">
                                        {product.status}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-12  items-center">
                            <span className="text-gray-500 font-semibold">{product.price1}</span>
                            <span className="text-gray-500 font-semibold">{product.price2}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content