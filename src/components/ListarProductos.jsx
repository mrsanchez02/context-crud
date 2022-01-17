import React, { useContext } from 'react'
import ProductoContext from '../context/ProductoContext'
import Producto from './Producto'

const ListarProductos = () => {

    const { lista } = useContext(ProductoContext)

    return (
        <div className='container'>
            <h2>Lista de Productos</h2>
            <hr />
            <ul className='list-group'>
                {lista.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ListarProductos
