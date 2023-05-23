import React from 'react'

const ProductCard = () => {
    return (
        <div>
            <div className="relative group">
                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img className=" w-full" src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png" alt="A girl wearing white suit posing in desert" />
                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                    <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
        </div>
    )
}

export default ProductCard