import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev);

  //디펜던시(여기서는 checked)가 변경될 때마다 useEffect가 호출됨. 
  //useEffect가 새로 호출될 때마다 정리하는(return에 작성된 부분) 콜백함수도 호출됨.
  useEffect(() => {
    fetch(`data/${checked ? 'sale_': ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    //컴포넌트가 언마운트될 때 리턴부분이 호출됨.
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

  return (
    <>
    <input id='checkbox' type={"checkbox"} value={checked} onChange={handleChange}></input>
    <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
