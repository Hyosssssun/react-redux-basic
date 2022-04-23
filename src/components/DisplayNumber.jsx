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

/* PURE REACT */

/*
    import React from 'react'

    export default function DisplayNumber({ numberToDisplay }) {
        return (
            <div>
                <h1>Display Number</h1>
                <h2>{numberToDisplay}</h2>
            </div>
        )
    }
*/