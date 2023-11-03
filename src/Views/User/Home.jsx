import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
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


    if (!Producto) {
        return <h1>Cargando...</h1>
    }
    return (
        <section className="h-full">
            <h1 className="py-10 text-[white] text-center text-4xl font-black">
                Productos
            </h1>
            <div className="flex flex-wrap py-4">
                {Producto.map((item) => {
                    return (
                        <div className="flex flex-wrap py-10">
                            <div key={item.id} className="flex flex-col flex-wrap w-[350px] px-10 items-center justify-evenly text-[white]">
                                <h1 className="">
                                    Nombre: {item.name}
                                </h1>
                                <p className="text-justify">
                                    Descripcion: {item.description}
                                </p>
                                <p>
                                    Precio: {item.price}$
                                </p>
                                <p>
                                    Categoria: {item.category}
                                </p>
                                <Link
                                    className="bg-[white] text-[black] px-4 py-2 rounded-full hover:bg-[black] hover:text-[white] hover:scale-105 duration-300"
                                    to={`/pago/${item._id}`}>
                                    Comprar
                                </Link>
                            </div>
                            <div className="">
                                <img className="rounded-full w-[240px] h-[300px]" src={`http://localhost:3002/image/productos/${item.image}`} alt="kramelo shop" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}