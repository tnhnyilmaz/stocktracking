import React, { useEffect, useState } from 'react';
import { FaBarcode, FaCamera, FaCube, FaPlusCircle, FaPoll } from 'react-icons/fa';
import { FaCircleMinus } from 'react-icons/fa6';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbCategory2 } from 'react-icons/tb';
import AddInputNumber from './AddInputNumber';
import ProductAddFormInput from './ProductAddFormInput';

const ProductAdd = () => {
    const [categories, setCategories] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({ name: 'Kategorisiz', color: '#000000' })
    const [selectedFileName, setSelectedFileName] = useState('')
    const [unit, setUnit] = useState(false)
    const [selectedUnit, setSelectedUnit] = useState('Adet')
    const [kdv, setKdv] = useState(false)
    const [selectedKdv, setSelectedKdv] = useState("20")
    const [kdvInputValue, setKdvInputValue] = useState("20") // Yeni state değişkeni


    const [vergilerHaricAlisFiyati, setVergilerHaricAlisFiyati] = useState('');
    const [vergilerHaricSatisFiyati, setVergilerHaricSatisFiyati] = useState('');
    const [vergilerDahilAlisFiyati, setVergilerDahilAlisFiyati] = useState('');
    const [vergilerDahilSatisFiyati, setVergilerDahilSatisFiyati] = useState('');

    const handleCategories = () => {
        setCategories(!categories)
    }
    const handleUnit = () => {
        setUnit(!unit)
    }
    const handleUnitSelect = (unite) => {
        setSelectedUnit(unite)
        setUnit(false)
    }
    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setCategories(false)
    }
    const handleKDV = () => {
        setKdv(!kdv);
    }
    const handleSelectedKDV = (kdvOran) => {
        setSelectedKdv(kdvOran);
        setKdv(false);
        // KDV oranından yüzde işaretini ve "KDV" kelimesini çıkarıp input'a yazıyoruz
        setKdvInputValue(kdvOran.replace(/[^0-9]/g, ''));
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
            // Handle the file upload logic here
            console.log(file);
        }
    }
    const kdvOranları = [
        { id: 1, oran: "0" },
        { id: 2, oran: "1" },
        { id: 3, oran: "8" },
        { id: 4, oran: "10" },
        { id: 5, oran: "18" },
        { id: 6, oran: "20" },
    ]
    const alisBirim = [
        { id: 1, name: 'Adet' },
        { id: 2, name: 'Ay' },
        { id: 3, name: 'Çift' },
        { id: 4, name: 'Çuval' },
        { id: 5, name: 'Dakika' },
        { id: 6, name: 'Desilitre' },
        { id: 7, name: 'Desimetre' },
        { id: 8, name: 'File' },
        { id: 9, name: 'Gram' },
        { id: 10, name: 'Gün' },
        { id: 11, name: 'Hafta' },
        { id: 12, name: 'Kamyon' },
        { id: 13, name: 'Kilogram' },
        { id: 14, name: 'Kilometre' },
        { id: 15, name: 'Koli' },
        { id: 16, name: 'Litre' },
        { id: 17, name: 'Metre' },
        { id: 18, name: 'Metrekare' },
        { id: 19, name: 'Metreküp' },
        { id: 20, name: 'Miligram' },
        { id: 18, name: 'Milimetre' },
        { id: 19, name: 'Paket' },
        { id: 20, name: 'Palet' },
        { id: 21, name: 'Poşet' },
        { id: 22, name: 'Saat' },
        { id: 23, name: 'Sandık' },
        { id: 24, name: 'Saniye' },
        { id: 24, name: 'Santimetre' },
        { id: 21, name: 'Ton' },
        { id: 22, name: 'Yıl' },
        { id: 23, name: 'Diğer' },
    ]
    const categoriesName = [
        {
            id: 1,
            name: 'Kategori 11',
            color: '#FF5733'
        },
        {
            id: 2,
            name: 'Kategori 22',
            color: '#33FF57'
        },
        {
            id: 3,
            name: 'Kategori 33',
            color: '#3333FF'
        }
    ]

    const hesaplaVergilerDahilFiyat = (fiyat, kdvOrani) => {
        const kdv = parseFloat(kdvOrani) / 100;
        return (parseFloat(fiyat) * (1 + kdv)).toFixed(2);
    };
    useEffect(() => {
        if (vergilerHaricAlisFiyati && selectedKdv) {
            setVergilerDahilAlisFiyati(hesaplaVergilerDahilFiyat(vergilerHaricAlisFiyati, selectedKdv));
        }
        if (vergilerHaricSatisFiyati && selectedKdv) {
            setVergilerDahilSatisFiyati(hesaplaVergilerDahilFiyat(vergilerHaricSatisFiyati, selectedKdv));
        }
    }, [vergilerHaricAlisFiyati, vergilerHaricSatisFiyati, selectedKdv]);
    const handleInputChange = (value, type) => {
        switch (type) {
            case 'vergilerHaricAlis':
                setVergilerHaricAlisFiyati(value);
                break;
            case 'vergilerHaricSatis':
                setVergilerHaricSatisFiyati(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className='bg-customPalette-lightest h-auto opacity-50 px-4'>
            <div className='bg-white w-full h-full rounded-lg p-4 py-4'>
                <div className='flex items-center gap-2'>
                    <FaCube className='text-5xl' />
                    <div className='px-3'></div>
                    <div className='text-sm  font-bold w-1/3'>ADI</div>
                    <input type="text" className='border-2 border-gray-300 rounded-sm p-2 h-10 w-1/3' />
                </div>
                <div className='py-2'></div>
                <hr className='w-full border-customPalette-medium' />
                <div className='py-2'></div>
                <ProductAddFormInput title='ÜRÜN / STOK KODU' icon={<FaCube />} />
                <ProductAddFormInput title='BARKOD KODU' icon={<FaBarcode />} />
                <div className='flex items-center gap-2'>
                    <TbCategory2 className='text-3xl ml-2' />
                    <div className='px-4'></div>
                    <div className='text-sm  font-bold w-1/3'>KATEGORİ</div>
                    <div className='w-2/12 relative z-20'>
                        <span
                            onClick={handleCategories}
                            className='bg-customPalette-dark border-customPalette-medium uppercase font-bold text-white text-xs rounded-3xl p-1'
                            style={{ backgroundColor: selectedCategory.color }}
                        >
                            {selectedCategory.name}
                        </span>
                        {
                            categories && (
                                <div className='absolute top-full mt-2 left-0 w-full bg-white border-2 border-customPalette-medium rounded-lg p-2 shadow-black shadow-md'>
                                    <input type="text" placeholder='Kategori Ara' className='w-full h-1/4 bg-white rounded-lg p-2 mb-4' />
                                    {
                                        categoriesName.map((category) => (
                                            <button key={category.id} className='w-full h-1/4' onClick={() => handleCategorySelect(category)}>
                                                <div key={category.id} >
                                                    <span
                                                        className='text-white font-bold rounded-3xl p-1'
                                                        style={{ backgroundColor: category.color }}
                                                    >
                                                        {category.name}
                                                    </span>
                                                    <div className='py-2'></div>
                                                </div>
                                            </button>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='py-2'></div>
                <div className='flex items-center gap-2'>
                    <div className='text-3xl ml-2'> <FaCamera /></div>
                    <div className='px-4'></div>
                    <div className='text-sm  font-bold w-1/3'>ÜRÜN FOTOĞRAFI</div>
                    <label htmlFor="upload-photo" className='border-2 border-customPalette-lightest rounded-md p-2 h-10 w-1/6 font-bold items-center text-center hover:border-customPalette-dark hover:text-customPalette-dark cursor-pointer'>
                        {(selectedFileName) || 'Fotoğraf Ekle'}
                    </label>
                    <input
                        type="file"
                        id="upload-photo"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />

                </div>
                <div className='py-2'></div>

                <div className='flex relative items-center gap-2'>
                    <div className='text-3xl ml-2'> <FaPoll /></div>
                    <div className='px-4'></div>
                    <div className='text-sm  font-bold w-1/3'>ALIŞ/SATIŞ BİRİMİ</div>
                    <button onClick={handleUnit} className='w-1/3 relative z-30 border-2 border-gray-300 rounded-sm p-2 h-10'>
                        <div  className='flex items-center justify-between text-customPalette-dark'>
                            <span>{selectedUnit}</span>
                            <RiArrowDropDownLine className='text-2xl' />
                            {
                                unit && (
                                    <div
                                        className='absolute mt-14 w-full h-1/12  overflow-y-scroll bg-white border-2 border-customPalette-medium rounded-lg p-2 shadow-black shadow-md'
                                        onClick={(e) => e.stopPropagation()}  // Burada olayın yayılmasını durduruyoruz
                                    >
                                        <input
                                            type="text"
                                            placeholder='Kategori Ara'
                                            className='w-full h-1/6 bg-white rounded-lg p-2 mb-4'
                                            onClick={(e) => e.stopPropagation()}  // Arama kutusuna tıklama olayını durduruyoruz
                                        />
                                        {
                                            alisBirim.map((birim) => (
                                                <div
                                                    key={birim.id}
                                                    onClick={() => handleUnitSelect(birim.name)}
                                                    className='flex items-center justify-between'
                                                >
                                                    <span>{birim.name}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </button>
                    <div className=''></div>
                </div>
                <div className='py-2'></div>
                <hr className='w-full border-customPalette-medium' />
                <div className='py-2'></div>
                <AddInputNumber
                    title={"VERGİLER HARİÇ ALIŞ FİYATI"}
                    icon={<FaCircleMinus />}
                    value={vergilerHaricAlisFiyati}
                    onChange={(value) => handleInputChange(value, 'vergilerHaricAlis')}
                />
                <AddInputNumber
                    title={"VERGİLER HARİÇ SATIŞ FİYATI"}
                    icon={<FaPlusCircle />}
                    value={vergilerHaricSatisFiyati}
                    onChange={(value) => handleInputChange(value, 'vergilerHaricSatis')}
                />
                <hr className='w-full border-customPalette-medium' />
                <div className='py-2'></div>
                <div className='flex items-center gap-2 relative z-20'>
                    <div className='text-3xl ml-2'> <HiOutlineReceiptTax /></div>
                    <div className='px-4'></div>
                    <div className='text-sm  font-bold w-1/3'>KDV ORANI</div>
                    <button className='w-1/3 border-2 border-gray-300 rounded-sm p-2 h-10'>
                        <div onClick={handleKDV} className='flex items-center justify-between text-customPalette-dark'>
                            <span>%{selectedKdv} KDV</span>
                            <RiArrowDropDownLine className='text-2xl' />

                            {kdv && (
                                <div
                                    className='absolute mt-8 w-1/6 h-auto overflow-y-scroll bg-white border-2 border-customPalette-medium rounded-lg p-2 shadow-black shadow-md'
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {kdvOranları.map((kdv) => (
                                        <div
                                            key={kdv.id}
                                            onClick={() => handleSelectedKDV(kdv.oran)}
                                            className='flex items-center justify-between'
                                        >
                                            <span>%{kdv.oran} KDV</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </button>
                </div>
                <div className='py-2'></div>
                <hr className='w-full border-customPalette-medium' />
                <div className='py-2'></div>
                <AddInputNumber
                    title={"VERGİLER DAHİL ALIŞ FİYATI"}
                    icon={<FaCircleMinus />}
                    value={vergilerDahilAlisFiyati}
                    readOnly={true}
                />
                <AddInputNumber
                    title={"VERGİLER DAHİL SATIŞ FİYATI"}
                    icon={<FaPlusCircle />}
                    value={vergilerDahilSatisFiyati}
                    readOnly={true}
                />
                <div className='flex justify-end ml-24 mt-4 w-2/3'>
                    <button className='w-1/6 mr-2'>
                        <div className='bg-yellow-600 w-full rounded-xl p-2'>
                            VAZGEÇ
                        </div>
                    </button>
                    <button className='w-1/6'>
                        <div className='bg-yellow-600 w-full rounded-xl p-2'>
                            KAYDET
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductAdd