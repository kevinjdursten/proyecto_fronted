import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import axios from "axios";


export const Pagos = () => {
    const [data, setData] = useState({
        PagosNoVerificados: [],
        PagosVerificados: [],
    });

    useEffect(() => {
        axios
            .all([
                axios.get("http://localhost:3002/unverified-payments"),
                axios.get("http://localhost:3002/verified-payments"),
            ])
            .then(
                axios.spread((res1, res2) => {
                    setData({
                        PagosNoVerificados: res1.data,
                        PagosVerificados: res2.data,
                    });
                })
            )
            .catch((err) => {
                console.log(err);
            })
    }, [data]);

    const verifyPayment = async (pagoID) => {
        try {
            const response = await axios.post(`http://localhost:3002/payments/verify/${pagoID}`);
            // Actualiza el estado u otras acciones necesarias después de verificar el pago
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 py6">
                <h1 >
                    Pagos no verificados
                </h1>
                <div className="py-10">
                    <table>
                        <thead className=" ">
                            <tr className="grid gap-4 grid-cols-5 ">
                                <th className="text-center">Total Pagado</th>
                                <th className="text-center">Imagen del Pago</th>
                                <th className="text-center">Datos del usuario</th>
                                <th className="text-center">Nombre del Producto</th>
                                <th className="text-center">Pago verificado</th>
                            </tr>
                        </thead>
                        <tbody className=" ">
                            {data.PagosNoVerificados.map((item) => (
                                <tr key={item._id} className="grid gap-4 grid-cols-5">
                                    <td className="text-center">{item.total}</td>
                                    <td className="text-center ml-20"><img src={`http://localhost:3002/image/pagos/${item.image}`} alt="image_pago" width="100" height="140" /></td>
                                    <td className="text-center">{item.user.name + " " + item.user.lastName + " " + item.user.email}</td>
                                    <td className="text-center">{item.producto.name}</td>
                                    <td className="text-center"><button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={() => verifyPayment(item._id)}>Aprobar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h1>
                    Pagos verificados
                </h1>
                <div className="py-10">
                    <table>
                        <thead className=" ">
                            <tr className="grid gap-4 grid-cols-5 ">
                                <th className="text-center">Total Pagado</th>
                                <th className="text-center">Imagen del Pago</th>
                                <th className="text-center">Datos del usuario</th>
                                <th className="text-center">Nombre del Producto</th>
                                <th className="text-center">Pago verificado</th>
                            </tr>
                        </thead>
                        <tbody className=" ">
                            {data.PagosVerificados.map((item) => (
                                <tr key={item._id} className="grid gap-4 grid-cols-5">
                                    <td className="text-center">{item.total}</td>
                                    <td className="text-center ml-20"><img src={`http://localhost:3002/image/pagos/${item.image}`} alt="image_pago" width="100" height="140" /></td>
                                    <td className="text-center">{item.user.name + " " + item.user.lastName + " " + item.user.email}</td>
                                    <td className="text-center">{item.producto.name}</td>
                                    <td className="text-center">El pago ya fue verificado</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}