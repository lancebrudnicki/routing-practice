import React from 'react';
import { link } from '@reach/router';



const Hello = props =>{
    return(
        <div>
            <h1 style={{ color: props.color, backgroundColor: props.backround}}>The word is: {props.word}</h1>
        </div>
    )



}

export default Hello;