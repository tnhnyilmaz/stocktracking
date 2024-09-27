import React from 'react';

const ProductRow = ({ image, name, status, price1, price2 }) => {
    return (
        <div className="flex justify-between w-full items-center bg-white shadow-md rounded-lg p-4 mb-2">
            <div className="flex items-center gap-4">
                <img src={image} alt={name} className="w-12 h-12 object-cover" />
                <div className="flex flex-col">
                    <span className="font-semibold">{name}</span>
                    {status && (
                        <span className="text-xs bg-red-200 text-red-600 px-2 py-1 rounded-full">
                            {status}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex gap-12  items-center">
                <span className="text-gray-500 font-semibold">{price1}</span>
                <span className="text-gray-500 font-semibold">{price2}</span>
            </div>
        </div>
    );
}

export default ProductRow
