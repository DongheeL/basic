import React from 'react';

export default function Profile({image, name, title}) { //props 대신 props 안의 속성값을 명시해 주면 JSX에서 일일이 props.image, props.name, props.title가 아닌 image, name, title로 사용할 수 있음. 
    return (
        <div className='profile'>
            <img className='photo' src={image} alt='avatar'></img>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

