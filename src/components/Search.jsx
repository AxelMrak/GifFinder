// Imports
import React, { useRef, useState } from 'react';
import { Container } from '../styledComponents/Container';
import GifList from './container/GifList';
import { Button } from '../styledComponents/Button';
import '../styles/search/searchStyle.css';


/*
 * This function will render an input for the search and it will pass the value in the input to GifList.
 ? Take the reference in the Input, save the reference in a state, then in the moment of click the reference is passed to GifList by params.
*/
function Search() {

    // Reference of input
    const inputRef = useRef();

    // State saves the value of input
    const [reference, setReference] = useState();

    // Take the current value of input and set in state.
    const takeValue = () => {
        setReference(inputRef.current.value);
    };

    return (
        <Container>
            <h2>Search a gif</h2>
            <input ref={inputRef} placeholder='Insert a word'></input>
            <Button onClick={takeValue}>Search</Button>
            <GifList word={reference}></GifList> 
        </Container>
    );
};

export default Search;