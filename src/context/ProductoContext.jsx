import React,{createContext,useState} from 'react';

const ProductoContext = createContext();

const initialList = [
    {
        id:1,
        nombre:'Spagetti',
        cantidad:4,
        comprado:false
    },{
        id:2,
        nombre:'Aceite Oliva',
        cantidad:2,
        comprado:true
    },{
        id:3,
        nombre:'Ajo',
        cantidad:3,
        comprado:false
}   
]

const ProductoProvider = ({children}) => {

    const [producto, setProducto] = useState({
        id:'',
        nombre:'',
        cantidad:'',
        comprado:false
    })
    
    const [lista,setLista]=useState([]);
    const [error,setError]=useState(false);

    const editar = id => {
        console.log('Editando',id);
    }

    const eliminar = id => {
        
        console.log('Eliminando',id);
    }

    const comprar = id => {
        const filtrar = lista.filter(producto => producto.id===id);
        console.log('Comprando',id);
        console.log(filtrar);
    }

    return (
        <ProductoContext.Provider value={{
            producto,
            lista,
            setLista,
            setProducto,
            error,
            setError,
            editar,
            eliminar,
            comprar
        }}>
            {children}
        </ProductoContext.Provider>
    );
};

export { ProductoProvider };
export default ProductoContext;
