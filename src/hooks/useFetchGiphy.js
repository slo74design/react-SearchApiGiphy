import { useEffect, useState } from "react"
import { getGiphys } from "../helpers/getGiphy";

export const useFetchGiphy = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGiphys( category )
            .then( imgs => {    
                setState({ 
                    data: imgs,
                    loading: false
                });
            });
    }, [ category ]);

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5],
    //         loading: false
    //     })
    // }, 2000 ); 

    return state;

}
