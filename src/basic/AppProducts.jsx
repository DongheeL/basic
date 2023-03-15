import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
// import Products from './components/Products';

const Products = React.lazy(()=> import('./components/Products'))
export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          {showProducts && <Products />}
        </Suspense>
      </ErrorBoundary>
        <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
