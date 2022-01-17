import React,{createContext,useState} from 'react';

const ProductoContext = createContext();

const ProductoProvider = ({children}) => {

    const [producto, setProducto] = useState({
        id:'',
        nombre:'',
        cantidad:'',
        comprado:false
    })
    
    const [lista,setLista]=useState([]);
    const [actualizar,setActualizar]=useState({update:false,product:''});
    const [error,setError]=useState(false);

    const modificar = producto => {
        if(actualizar.update){
            const nuevaLista = lista.map(productoLista => {
                if(productoLista.id===producto.id){
                    productoLista.nombre=producto.nombre;
                    productoLista.cantidad=producto.cantidad;
                }
                return productoLista;
            })
            setLista(nuevaLista);
            setActualizar({update:false,product:''});
            return;
        }
        setLista([...lista,producto]);
    }

    const eliminar = id => {
        const nuevaListafiltrada = lista.filter(producto => producto.id!==id);
        setLista(nuevaListafiltrada);
    }

    const comprar = id => {
        const nuevaLista = lista.map(producto => {
            if(producto.id===id) producto.comprado = !producto.comprado
            return producto;
        })   
        setLista(nuevaLista);
    }

    return (
        <ProductoContext.Provider value={{
            producto,
            lista,
            setLista,
            setProducto,
            error,
            setError,
            modificar,
            eliminar,
            comprar,
            setActualizar,
            actualizar
        }}>
            {children}
        </ProductoContext.Provider>
    );
};

export { ProductoProvider };
export default ProductoContext;
