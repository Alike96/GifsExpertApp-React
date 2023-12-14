import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'

import './GifGrid.css'
import useFetchGifs from '../hooks/useFetchGifs'


const GifGrid = ({categoria}) => {

  const {data: images, loading} = useFetchGifs(categoria);

  return (
    <div>
      <h2>{categoria}</h2>
      <hr />
        {loading && <p>Cargando...</p>}
        
        <div className='card-grid'> 
        {
          images.map(
            (img) => (
                <GifGridItem 
                  key={img.id}
                  {...img}
                /> 
            )
          )
        }
        </div>

    </div>
  )
}

GifGrid.propTypes =  {
    categoria : PropTypes.string.isRequired
}

export default GifGrid
