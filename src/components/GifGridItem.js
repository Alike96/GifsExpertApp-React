
import React from 'react'
import PropTypes from 'prop-types'

import './GifGridItem.css'

const GifGridItem = ({url, title = 'no_title'}) => {
  return (
    <div id='container'>
      <img src={url} alt={title} />
      <p id='title'>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
    url : PropTypes.string.isRequired,
    title: PropTypes.string

}

export default GifGridItem
