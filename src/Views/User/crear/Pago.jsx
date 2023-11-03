import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Pago = () => {
    const [userID] = useState(localStorage.getItem("userID"));
    const { productId } = useParams();
    const [Producto, setProducto] = useState(null);
    const [Pago, setPago] = useState({
        total: "",
        image: null,
        userID: userID,
        productoID: productId
    });

    useEffect(() => {
        // Obtener información del producto
        axios
            .get(`http://localhost:3002/product/${productId}`)
            .then((res) => {
                setProducto(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [productId]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // Manejar archivos por separado
        const newValue = type === "file" ? e.target.files[0] : value;
        setPago((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Producto) {
            // Asigna el precio del producto al campo "total"
            setPago((prevState) => ({
                ...prevState,
                total: Producto.price
            }));

            const formData = new FormData();
            formData.append("total", Pago.total);
            formData.append("image", Pago.image);
            formData.append("userID", Pago.userID);
            formData.append("productoID", Pago.productoID);

            axios
                .post("http://localhost:3002/upload", formData)
                .then((res) => {
                    console.log(res);
                    setPago({
                        total: "",
                        image: null,
                        userID: userID,
                        productoID: productId
                    });
                    alert("Pago registrado con éxito");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }


    return (
        <section>
            <h1>Pago</h1>
            <div>
                <label htmlFor="Cuenta">Cuenta Bancaria</label>
                <p>
                    Banco: Banesco
                </p>
                <p>
                    Cuenta: 123456789
                </p>
                <p>
                    CBU: 123456789
                </p>
                <p>
                    Alias: 123456789
                </p>
                <p>
                    CUIT: 123456789
                </p>
            </div>
            <div>
                <label>Total:</label>
                <p>{Producto ? `${Producto.price}$` : "Cargando..."}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Imagen</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Registrar Pago</button>
            </form>
        </section>
    )

}
