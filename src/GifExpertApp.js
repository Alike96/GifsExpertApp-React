import React, { useState } from 'react'

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One Piece',])

    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategoria= {setCategoria}/>
        <hr/>
        <ol>
            {
                categoria.map((cat) => {
                    return (
                        <GifGrid key={cat} categoria={cat}/>
                    );
                })
            }
        </ol>
        </>
    )
}


export default GifExpertApp
