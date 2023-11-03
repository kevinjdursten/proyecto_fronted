import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

export const Productos = () => {
    const [Producto, setProducto] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3002/product")
            .then((res) => {
                setProducto(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [Producto]);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:3002/product/${id}`)
            .then((res) => {
                console.log(res);
                alert("Producto Eliminado Exitosamente")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const confirmarEliminacion = (id) => {
        if (window.confirm("¿Deseas eliminar este producto?")) {
            handleDelete(id);
        }
    }

    if (!Producto) {
        return <h1>Cargando...</h1>
    }
    return (
        <>
            <h1>
                Productos
            </h1>
            <Link to="/crear">
                Crear Porducto +
            </Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Opciones</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Producto.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <Link to={`/product/${product._id}`}>
                                            ✏️
                                        </Link>
                                        <button
                                            onClick={() => confirmarEliminacion(product._id)}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <img
                                            src={`http://localhost:3002/image/productos/${product.image}`}
                                            alt={product.name}
                                            style={{ maxWidth: "100px" }}
                                        />
                                    </td>
                                    <td>{product.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}