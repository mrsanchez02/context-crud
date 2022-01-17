import React from 'react';
import Formulario from './components/Formulario';
import ListarProductos from './components/ListarProductos';
import { ProductoProvider } from './context/ProductoContext';

function App() {
  
  return (
    <ProductoProvider>
      <div className="row mt-5 container">
        <div className="col-md-4">
          <Formulario/>
        </div>
        <div className="col-md-8">
          <ListarProductos/>
        </div>
      </div>
    </ProductoProvider>
  );
}

export default App;