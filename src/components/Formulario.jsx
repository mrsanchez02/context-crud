import React, { useContext,useRef,useEffect } from 'react'
import shortid from 'shortid';
import ProductoContext from '../context/ProductoContext'

const Formulario = () => {

    const nombreRef = useRef(null);
    const cantidadRef = useRef(null);

    const {producto,setProducto,error,setError,modificar,actualizar} = useContext(ProductoContext);
    const {nombre,cantidad}=producto;
    const {update,product}=actualizar;

    useEffect(()=>{
        product.nombre && (nombreRef.current.value = product.nombre)
        product.cantidad && (cantidadRef.current.value = product.cantidad)
        product.nombre && (nombreRef.current.focus())
    },[update,product])

    const handleSubmit = e => { 
        e.preventDefault();
        if(update){
            // Validar
            if(nombre.trim()===''||cantidad.trim()===''||isNaN(cantidad)){
                setError(true);
                return
            }

            modificar(producto)    
            nombreRef.current.value=''
            cantidadRef.current.value=''
        }
        
        // Validar
        if(nombre.trim()===''||cantidad.trim()===''||isNaN(cantidad)){
            setError(true);
            return
        }
        setError(false);
        
        producto.id = shortid.generate();
        modificar(producto)
        setProducto({
            id:'',
            nombre:'',
            cantidad:0,
            comprado:false
        })

        nombreRef.current.value=''
        cantidadRef.current.value=''
    }

    const handleChange = e => {

        if(update){
            product.nombre=nombreRef.current.value;
            product.cantidad=cantidadRef.current.value;
        }

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
                        ref={nombreRef}
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
                        ref={cantidadRef}
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
