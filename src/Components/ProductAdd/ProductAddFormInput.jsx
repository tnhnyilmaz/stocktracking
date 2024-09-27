import React from 'react'
import { FaCube } from 'react-icons/fa'

const ProductAddFormInput = ({ title, icon }) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='text-3xl ml-2'> {icon}</div>
                <div className='px-4'></div>
                <div className='text-sm  font-bold w-1/3'>{title}</div>
                <input type="text" className='border-2 border-gray-300 rounded-sm p-2 h-10 w-1/3' />
            </div>
            <div className='py-2'></div>
        </div>
    )
}

export default ProductAddFormInput