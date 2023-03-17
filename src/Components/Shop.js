import React from 'react'

const Shop = () => {
    return (
        <div className=' mt-20 space-y-10 flex flex-col items-center justify-center mx-auto w-1/4 p-5 bg-indigo-800 rounded-xl' >
            <h2 className='text-3xl  '>Buy Shoes</h2>
            <div className='space-x-5 flex flex-row items-center justify-center'>
                <button className=' px-2 py-1 bg-blue-500 rounded-full'>-</button>
                <span>Add  to cart</span>
                <button className='px-2 py-1 bg-blue-500 rounded-full'>+</button>
            </div>
        </div>
    )
}

export default Shop
