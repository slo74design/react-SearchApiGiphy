
    // Peticion API
    export const getGiphys = async ( category ) => { 
        const apiKey = '74RjVwZ6O3uBxklYrNq8uynypnygO14H'; // registrado como byuppy en GIPHY
        // URL Giphy with ApiKey: http://api.giphy.com/v1/gifs/random?api_key=74RjVwZ6O3uBxklYrNq8uynypnygO14H
        const url = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${ apiKey }`);
        // desestructuro el primer nodo del API que se llama data
        const { data } = await url.json(); 

        const gifs = data.map( img => {
            return {
                id : img.id,
                title : img.title,
                url: img.images?.downsized_medium.url
            }
        })
        // console.log(gifs)
        // setImages(gifs);
        return gifs;
    }