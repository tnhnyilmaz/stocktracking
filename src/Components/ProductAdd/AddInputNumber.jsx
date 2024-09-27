import React, { useState } from 'react';
import { FaEuroSign } from 'react-icons/fa';
import { FaTurkishLiraSign } from 'react-icons/fa6';
import { IoLogoUsd } from 'react-icons/io5';

const AddInputNumber = ({
    title, icon, value, onChange, readOnly = false
}) => {
    const [money, setMoney] = useState(false);
    const [selectedMoney, setSelectedMoney] = useState('Turkish Lira')

    const moneyUnit = [
        {
            id: 1,
            name: "Turkish Lira",
            icon: <FaTurkishLiraSign />
        },
        {
            id: 2,
            name: "Euro",
            icon: <FaEuroSign />
        },
        {
            id: 3,
            name: "Dolar",
            icon: <IoLogoUsd />
        }
    ]
    const handleMoney = () => {
        setMoney(!money)
    }
    const handleSelectMoney = (money) => {
        setSelectedMoney(money);
        setMoney(!money)
    }
    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='text-3xl ml-2'> {icon}</div>
                <div className='px-4'></div>
                <div className='text-sm font-bold w-1/3'>{title}</div>
                <div className='relative flex items-center w-1/3'>
                    <input
                        placeholder={"0.00"}
                        type="number"
                        value={value}
                        onChange={(e) => onChange && onChange(e.target.value)}
                        readOnly={readOnly} className='border-2 font-mono border-gray-300 rounded-sm p-2 h-10 w-full pr-12' />
                    <div className='absolute right-3 flex items-center gap-1 cursor-pointer' onClick={handleMoney}>
                        {moneyUnit.find(m => m.name === selectedMoney)?.icon}

                    </div>
                    {money && (
                        <div className='absolute top-full left-0 w-full bg-white border-2 border-customPalette-medium rounded-lg p-2 shadow-black shadow-md mt-1 z-10'>
                            {moneyUnit.map((mon, i) => (
                                <div
                                    key={i}
                                    className='flex items-center justify-between gap-4 p-2 hover:bg-gray-100 cursor-pointer'
                                    onClick={() => handleSelectMoney(mon.name)}
                                >
                                    {mon.name}
                                    {mon.icon}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='py-2'></div>
        </div>
    )
}

export default AddInputNumber