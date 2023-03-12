import React from 'react';
import Avatar from './Avatar';

export default function Profile({image, name, title, isNew }) { //props 대신 props 안의 속성값을 명시해 주면 JSX에서 일일이 props.image, props.name, props.title가 아닌 image, name, title로 사용할 수 있음. 
    return (
        <div className='profile'>
            {/* 사용자 사진과 new를 Avatar 컴포넌트로 분리했다. */}
            <Avatar 
                image={image}
                isNew={isNew}
            />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

