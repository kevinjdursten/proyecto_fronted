import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Pago = () => {
    const usuarioID = localStorage.getItem("userID");
    const { productId } = useParams();
    const [Usuario, setUsuario] = useState(null);
    const [Producto, setProducto] = useState(null);
    const [Pago, setPago] = useState({
        image: null,
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

    useEffect(() => {
        // Obtener información del producto
        axios
            .get(`http://localhost:3002/user/${usuarioID}`)
            .then((res) => {
                setUsuario(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [usuarioID]);


    const handleChange = (e) => {
        const { name, type } = e.target;
        const newValue = type === "file" ? e.target.files[0] : null;
        setPago((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Producto) {
            // Asigna el precio del producto directamente a la variable total
            const total = Producto.price;
            const userID = Usuario._id
            const productoID = productId;

            const formData = new FormData();
            formData.append("total", total);
            formData.append("image", Pago.image);
            formData.append("userID", userID);
            formData.append("productoID", productoID);

            axios
                .post("http://localhost:3002/pago", formData)
                .then((res) => {
                    console.log(res);
                    alert("Pago registrado con éxito");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Por favor, asegúrate de que la información del producto se ha cargado correctamente.");
        }
    }

    return (
        <section className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-4">
                <h1 className="py-4 text-4xl text-[white] font-black">Pago</h1>
                <div className="flex flex-col border-2 w-1/6 items-center justify-center py-6 text-[white]">
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
                <div className="flex py-4 text-lg text-[white] font-black">
                    <label>Total a Pagar:</label>
                    <p>{Producto ? `${Producto.price}$` : "Cargando..."}</p>
                </div>
                <div className="py-2 text-lg text-[white] font-black">
                    <p>Porfavor enviar el comprobante de pago para validar su pago y hacer el envio</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center text-[white] my-2">
                        <label htmlFor="image" className="text-[white] font-black text-lg">Imagen de pago</label>
                        <input
                            className="rounded-full"
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleChange}
                        />
                        <button type="submit" className="bg-[white] text-[black] p-1 my-4 rounded-full">Registrar Pago</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
