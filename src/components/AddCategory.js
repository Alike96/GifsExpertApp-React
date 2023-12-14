
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategoria}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputOnChange = (event)=>{
        setInputValue(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        if(inputValue !== ''){
            setCategoria(categorias=>[inputValue, ...categorias,])
            setInputValue('')
        }
    }

    return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text" 
            name="" 
            id="SearchCategory" 
            placeholder='Type a category'
            value={inputValue}
            onChange={handleInputOnChange}
            />
    </form>
  )
}

AddCategory.propTypes = {
    setCategoria : PropTypes.func.isRequired

}

export default AddCategory

