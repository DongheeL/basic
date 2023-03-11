import React from 'react';

export default function Profile(props) {
    return (
        <div className='profile'>
            <img className='photo' src={props.image} alt='avatar'></img>
            <h1>{props.name}</h1>
            <p>{props.title}</p>
        </div>
    );
}

