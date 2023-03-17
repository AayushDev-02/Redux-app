import React from 'react'

import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../State/index'

const Shop = () => {

    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

    return (
        <div className=' mt-20 space-y-10 flex flex-col items-center justify-center mx-auto w-1/4 p-5 bg-indigo-800 rounded-xl' >
            <h2 className='text-3xl  '>Deposit / Withdraw</h2>
            <div className='space-x-5 flex flex-row items-center justify-center'>

                {/* <button onClick={() => dispatch(actionCreators.withdrawMoney(100))} className=' px-2 py-1 bg-blue-500 rounded-full'>-</button>

                <span>Add  to cart</span>

                <button onClick={ () => dispatch(actionCreators.depositMoney(100))} className='px-2 py-1 bg-blue-500 rounded-full'>+</button> */}

{/*                             ---------------------------------------------------------                        */}

                <button onClick={() => {withdrawMoney(100)}} className=' px-2 py-1 bg-blue-500 rounded-full'>-</button>

                <span>Add  to cart</span>

                <button onClick={ () => {depositMoney(100)}} className='px-2 py-1 bg-blue-500 rounded-full'>+</button>
            </div>
        </div>
    )
}

export default Shop
