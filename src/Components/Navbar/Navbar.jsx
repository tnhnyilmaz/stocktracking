import React, { useState } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const [check, setCheck] = useState(false)
    console.log(check)
    return (
        <div className='bg-customPalette-lightest bg-opacity-50 '>
            <div className='flex items-center justify-between p-4 text-black'>
                <div className='font-bold text-2xl'>Ürünler</div>
                <div className='flex items-center ml-4'>
                    <MdOutlineAccountCircle className='text-2xl' />
                    <div className='ml-2 text-lg'>Tunahan Yılmaz</div>
                    <button onClick={() => setCheck(!check)}>
                        <RiArrowDropDownLine className='text-4xl' />
                    </button>
                </div>
            </div>
            {check && (
                <div className='absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded'>
                    <ul>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer text-black'>Profile</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer text-black'>Settings</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer text-black'>Logout</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar