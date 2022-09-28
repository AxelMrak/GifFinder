// Imports
import React, { useState, useEffect, Fragment } from 'react';
import { CallApi } from '../../services/CallApi';
import Gif from '../pure/Gif';

/*
 ? This component will render the list of all gifs.
 * @param { Receives a word. This word will be passed to call API. }
 * @returns Each gif unit
 */

function GifList({ word }) {

    /**
     * * This state contains the return of API.
     */
    const [gifs, setGifs] = useState([])

    /*
     ? UseEffect makes possible what the gifts will be rendered in each search.
     * We call the API with the word gived. Then the response is save in the state.
     * Too we catch the error.
    */
    useEffect(() => {
        CallApi({ keyword: word })
            .then(gifs => setGifs(gifs))
            .catch(e => console.error(e));
    });

    return (
        <Fragment>
            {/* Return each gif in array gifs. */}
            {
                gifs.map(gif => {
                    return (
                        <Gif title={gif.title} user={gif.username} url={gif.images.downsized.url} key={gif.id} />
                    );
                })
            };
        </Fragment>
    );
};

export default GifList;