import { useState, useEffect } from 'react';
import { LinksFunction } from 'remix';

import imageStyles from '~/styles/images.css';

export let links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: imageStyles }
    ]
}

type Image = {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}

export default function Images() {

    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        if (loaded) return;
        (async () => {
            const response = await fetch("https://picsum.photos/v2/list", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            const json = await response.json();
            setImages(json);
            console.log('images')
        })()
        setLoaded(true);
    }, [loaded]);



    return (
        <div>
            <div className='photo-grid'>
                {images.length > 0 && images.map((image: Image) => (
                    <div key={image.id}>
                        <img src={image.download_url} height='300px' width='300px' alt={image.author} />
                    </div>
                ))}
            </div>
        </div>
    )
}