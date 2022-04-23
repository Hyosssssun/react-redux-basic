import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayNumber() {
    const { count } = useSelector((state)=>state.counter)
    return (
        <div>
            <h1>Display Number</h1>
            <h2>{count}</h2>
        </div>
    )
}