import React, { useContext } from 'react'
import shortid from 'shortid';
import ProductoContext from '../context/ProductoContext'

const Formulario = () => {

    const {producto,setProducto,setLista,error,setError,lista} = useContext(ProductoContext);
    const {nombre,cantidad}=producto;

    const handleSubmit = e => { 
        e.preventDefault();
        
        // Validar
        if(nombre.trim()===''||cantidad.trim()===''||isNaN(cantidad)){
            setError(true);
            return
        }
        setError(false);
        
        producto.id = shortid.generate();
        setLista([...lista,producto]);
        setProducto({
            id:'',
            nombre:'',
            cantidad:'',
            comprado:false
        })
    }

    const handleChange = e => {
        setProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }
    
    return (
        <div className='container mb-3'>
            <h2>Formulario</h2>
            <hr/>
            {error && <p className='alert alert-danger text-center'>😡 Todos los campos son obligatorios!</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        placeholder='Queso...' 
                        id='nombre' 
                        name='nombre' 
                        value={nombre}
                        onChange={handleChange}
                        className='form-control'
                    />
                    <label htmlFor="nombre" className='floatingInput'>Nombre producto</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="number" 
                        placeholder='2' 
                        name="cantidad" 
                        value={cantidad}
                        onChange={handleChange}
                        className='form-control'
                    />
                    <label htmlFor="cantidad" className='floatingInput'>Cantidad</label>
                </div>
                <button className="btn btn-primary">
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default Formulario
