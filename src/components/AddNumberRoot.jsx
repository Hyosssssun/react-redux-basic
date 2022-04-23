import React from 'react'
import AddNumber from './AddNumber'

export default function AddNumberRoot(){
    return (
        <div>
            <h1>Add Number Root</h1>
            <AddNumber />
        </div>
    )
}


/* PURE REACT */

/*
    import React from 'react'
    import AddNumber from './AddNumber'

    export default function AddNumberRoot({ plusOne, minusOne, plus100 }){
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber plusOne={plusOne} minusOne={minusOne} plus100={plus100} />
            </div>
        )
    }
*/