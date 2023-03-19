import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

const Products = React.lazy(()=> import('./components/Products'))
export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
        {showProducts && <Products />}
        <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
