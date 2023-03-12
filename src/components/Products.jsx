import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev);

  //맨 처음 마운트될 때 한 번만 데이터를 불러오기 위해 useEffect를 사용(dependency를 []로 주면 맨 처음 마운트될 때만 호출)
  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    //컴포넌트가 언마운트될 때 리턴부분이 호출됨.
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, []);

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
