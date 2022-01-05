import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { CardGrid } from './CardGrid';

export const Buscador = () => {

    const [categories, setCategories] = useState(['Superman']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Lupin']);
    //     // setCategories( cats => [...cats, 'Lupin']); // otro metodo valido
    // }


    return (
        <>
            <div className="container mt-5">
                
                <h2>Search from Api Giphy</h2>

                {/* un metodo basico para pasar valores a otro componente. El primer nombre es inventato */}
                <AddCategory refSetCategories={ setCategories } /> 

                {/* <button onClick={ handleAdd }>Agregar</button> */}

                <ol>
                    { categories.map( item => 
                        <CardGrid 
                            key={ item } 
                            category={ item } 
                        />
                        // return <li key={item}>{ item }</li>;
                    )}
                </ol>
            </div>
        </>
    )
}
