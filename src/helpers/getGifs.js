

export const getGifs = async(categoria) =>{
    const url  = `https://api.giphy.com/v1/gifs/search?api_key=m11Um8HBlGVhXiafXSzW8R9CJVNovq5q&q=${encodeURI( categoria )}&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map( img =>{
            return {
                id    : img.id,
                title : img.title,
                url   : img.images.downsized_medium.url
            }
            })

    return gifs;
}

