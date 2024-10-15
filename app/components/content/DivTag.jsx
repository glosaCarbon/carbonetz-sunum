import React, { useEffect, useState } from 'react'

const DivTag = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const items = ['Seçenek 1', 'Seçenek 2', 'Seçenek 3', 'Seçenek 4', 'Seçenek 5', 'Seçenek 6', 'Seçenek 7'];
    const [selectedOption, setSelectedOption] = useState('option2');

    const options = [
        { value: 'option1', label: 'Seçenek 1' },
        { value: 'option2', label: 'Seçenek 2' },
        { value: 'option3', label: 'Seçenek 3' },
    ];

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSelectItem = (item) => {
        if (selectedTags.includes(item)) {
            // Eğer item zaten seçilmişse, onu sil
            setSelectedTags((prev) => prev.filter((tag) => tag !== item));
        } else {
            // Eğer item seçili değilse, onu ekle
            setSelectedTags((prev) => [...prev, item]);
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <div className='bg-slate-50 flex p-3 shadow-md rounded-md items-center justify-center w-full'>
                <select className="w-full p-1 bg-slate-50" value={selectedOption} onChange={event => handleChange(event)}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="tag-section bg-slate-50 shadow-md rounded-md p-3 w-full">
                <div className="selected-tags flex border-[1px] flex-wrap gap-2 p-3">
                    {selectedTags.length < 1 && <span className='w-full text-center text-sm text-gray-500'>Seçilmiş bir alan yok!</span>}
                    {selectedTags.map((tag, index) => (
                        <div key={index} className="bg-gray-600 text-sm min-w-[85px] text-center shadow-md p-1 rounded-sm text-white font-normal">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="item-list max-h-[294px] overflow-y-auto">
                    {items.map((item, index) => (
                        <div key={index} className={selectedTags.includes(item) ? "flex items-center bg-green-100 cursor-pointer p-2 border-[1px] my-1 font-medium" : "flex p-2 cursor-pointer items-center border-[1px] my-1"} onClick={() => handleSelectItem(item)}>
                            {item} {selectedTags.includes(item) && <span className='text-xs px-2 font-light text-gray-500'>Selected</span>}
                        </div>
                    ))}
                    <div onClick={() => null} className='w-full cursor-pointer text-center font-light underline text-blue-700 mt-3 text-xs'>Aradığım burada yok!</div>
                </div>
            </div>
        </div>

    );
}

export default DivTag