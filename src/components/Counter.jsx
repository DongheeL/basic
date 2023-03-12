import React, { useState } from 'react';

export default function Counter({setTotalCount, total}) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>{count}<span className='small'>/{total}</span></span>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          setTotalCount();
        }}
      >
        Add +
      </button>
    </div>
  );
}
