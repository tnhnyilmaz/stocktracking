import React, { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Dashboard = () => {
    const [check, setCheck] = useState(false)
    const handleCheck = () => {

    }
    const options = [
        {
            title: "Güncel Durum",
            icons: <MdOutlineRealEstateAgent />,
            sublinks: []
        },
        {
            title: "Satışlar",
            icons: <IoDownloadOutline />,
            sublinks: [
                { name: "Makbuzlar", links: "/" },
                { name: "Makbuzlar", links: "/" }
            ]
        },
        {
            title: "Giderler",
            icons: <IoDownloadOutline className='transform rotate-180' />,
            sublinks: [
                { name: "Makbuzlar", links: "/" },
                { name: "Makbuzlar", links: "/" }
            ]
        },
        {
            title: "Ürünler",
            icons: <AiOutlineProduct />,
            sublinks: [
                { name: "Makbuzlar", links: "/" },
                { name: "Makbuzlar", links: "/" }
            ]
        },
        {
            title: "Kasa",
            icons: <FaMoneyBill1Wave />,
            sublinks: [
                { name: "Makbuzlar", links: "/" },
                { name: "Makbuzlar", links: "/" }
            ]
        },
    ]
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        setCheck(!check);
    };

    return (
        <div className='bg-customPalette-dark h-screen '>
            <img className='w-3/6' src="https://cdn-icons-png.flaticon.com/512/9252/9252207.png" alt="" />
            <div>
                {
                    options.map((op, index) => (
                        <div key={index} className='mb-2 p-2'>
                            <div
                                className='flex items-center justify-between'
                                onClick={() => toggleDropdown(index)}
                            >
                                {/* İkon ve başlık kırmızı olmalıysa kontrol */}
                                <div className={`text-2xl pr-3 ${openIndex === index ? 'text-white' : 'text-customPalette-lightest opacity-75'}`}>
                                    {op.icons}
                                </div>
                                <h1
                                    className={`cursor-pointer text-left uppercase font-bold ${openIndex === index ? 'text-white' : 'text-customPalette-lightest opacity-75'}`}
                                >
                                    {op.title}
                                </h1>
                                {
                                    op.sublinks.length > 0 && openIndex === index && check ? (
                                        <RiArrowDropUpLine className='text-white text-2xl' />
                                    ) : (
                                        <RiArrowDropDownLine className='text-customPalette-lightest text-2xl opacity-75' />
                                    )
                                }
                            </div>
                            {/* Açılır menü */}
                            {op.sublinks.length > 0 && openIndex === index && (
                                <ul className='ml-4'>
                                    {op.sublinks.map((sublink, subIndex) => (
                                        <li key={subIndex} className='text-sm text-gray-300'>
                                            <a href={sublink.links}>{sublink.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


export default Dashboard