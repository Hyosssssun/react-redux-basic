import React from 'react'
import { useDispatch } from 'react-redux'
import { plus, minus, plusAmount } from '../redux/counter';

export default function AddNumber() {
    const dispatch = useDispatch();
    return (
        <div >
            <h1>Add Number</h1>
            <button onClick={()=> dispatch(plus())}> + </button>
            <button onClick={()=> dispatch(minus())}> - </button>
            <button onClick={()=> dispatch(plusAmount(100))}> + 100 </button>
        </div>
    )
}