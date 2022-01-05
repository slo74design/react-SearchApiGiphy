import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { refSetCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Metodo 1: Per validare se il campo di texto no es vacio
        // if(!inputValue.trim()) { 
        //     console.log('Form vacio');
        //     return; 
        // }        

        if(inputValue.trim().length > 2) { 
            refSetCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }   

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search your Giphy" 
                    value={inputValue} 
                    onChange={ handleInputChange }
                />
            </div>
        </form>
        </>
    )
}

AddCategory.propTypes = {
    refSetCategories: PropTypes.func.isRequired,
}
