import React, { useEffect, useState } from 'react'
import { getGiphys } from '../helpers/getGiphy';
import { useFetchGiphy } from '../hooks/useFetchGiphy';
import { SingleCard } from './SingleCard';

export const CardGrid = ( { category } ) => {

    const { data: images, loading } = useFetchGiphy( category );
    console.log(images, loading);

    // Metodo con los Hooks de useState y useEffect incluido en el componente
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGiphys( category )
    //         .then( imgs => setImages(imgs));
    // }, [ category ]);
    // Hecho de esta forma [] tengo un warning: React Hook useEffect has a missing dependency: 'category'. Either include it or remove the dependency array.
    // Eso significa que la category PODRIA cambiar, por eso tengo que poner entre [] la category
    // }, []);

    return (
        <div>
            <h3>{ category }</h3>
            {/* Un operador ternario con dos condiciones tradicionales */}
            {/* { loading ? 'Cargando...' : 'Data API cargada'} */}
            {/* Operador ternario con una condicion */}
            <p className="my-3">{ loading && 'Cargando...' }</p>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 animate__animated animate__fadeIn">
                { 
                    // Metodo con los Hooks de useState y useEffect incluido en el componente
                    // images.map( img => (
                    //     <SingleCard 
                    //         key={img.id}
                    //         // refImg = {img} Metodo tradicional para pasar datos entre componentes
                    //         // segundo metodo mas populares para pasar datos entre componentes
                    //         { ...img } 
                    //     />
                    // )) 

                    // Metodo con el Custom Hook useFetchGiphy externo al componente
                    images.map( img => (
                        <SingleCard 
                            key={img.id}
                            // refImg = {img} Metodo tradicional para pasar datos entre componentes
                            // segundo metodo mas populares para pasar datos entre componentes
                            { ...img } 
                        />
                    ))                     
                }
            </div>

        </div>
    )
}
