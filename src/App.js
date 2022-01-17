import React from 'react';
import Formulario from './components/Formulario';
import ListarProductos from './components/ListarProductos';
import { ProductoProvider } from './context/ProductoContext';

function App() {
  
  return (
    <ProductoProvider>
      <div className="row mt-5 container">
          <Formulario/>
          <ListarProductos/>
      </div>
    </ProductoProvider>
  );
}

export default App;