import React,{useContext} from 'react'
import ProductoContext from '../context/ProductoContext'

const Producto = ({producto}) => {

    const {setActualizar, eliminar, comprar} = useContext(ProductoContext);

    const {id, nombre, cantidad, comprado}=producto;

    return (
        <li key={producto.id} className='list-group-item d-flex justify-content-between align-items-center'>
                <div className="">
                    <span className='badge bg-primary'>{cantidad}</span> - {nombre}
                </div>
                <div className='d-flex gap-2'>
                    <button 
                        onClick={()=>comprar(id)}
                        className={`btn ${comprado?'btn-success':'btn-outline-success'} btn-sm`}
                    >{comprado?'Comprado 😀!':'No comprado ☹!'}</button>
                    <button
                        className='btn btn-secondary btn-sm'
                        onClick={()=>{
                            if(comprado)return;
                            setActualizar({update:true,product:producto})
                        }}
                    >Editar</button>
                    <button
                        className='btn btn-danger btn-sm'
                        onClick={()=>eliminar(id)}
                    >Eliminar</button>
                </div>
        </li>
    )
}

export default Producto