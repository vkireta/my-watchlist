import WatchItem from "./WatchItem";
import movies from '../data/movies.json';
import { useEffect } from "react";
import { useState } from "react";
import { number } from "prop-types";

const Favorites = () => {
    const moviesWrap = {
        display: 'flex',
        flexWrap: 'wrap',
        width: 768,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '54px 0'
    }

    const filteredMovies = movies.filter((movie) => movie.isFavorite)
    const [numer, setNumer] = useState(0)

    useEffect(() => {
        console.log('komponenta favorites se mountala');

        return () => console.log('komponenta Favorites umrla');
    }, [])

    useEffect(() => {
        console.log('number se promjenio');
    },  [number])
    

    return (
        <div style={moviesWrap}>
            <button
                onClick={() => setNumer(number+1)}
            >
                Uvećavaj za jedan
                </button>
                <h1>{number}</h1>
            {
                filteredMovies.map((movie) => {
                    return (
                        <WatchItem
                            movieObject={movie}
                            director="jbfkjbefjkb"
                            key={movie.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites