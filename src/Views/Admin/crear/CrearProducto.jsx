import React, { useState } from "react";
import axios from "axios";

export const CrearProducto = () => {
    //Estado del producto a crear
    const [Producto, setProducto] = useState({
        name: "",
        price: "",
        description: "",
        image: null,
        category: ""
    });
    const Categoria = ["Cumpleaños", "Aniversarios", "Infantil", "Graduacion"];

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // Manejar archivos por separado
        const newValue = type === "file" ? e.target.files[0] : value;
        setProducto((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };

    const validateData = () => {
        const stringRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s.]+$/;
        const numberRegex = /^[0-9\s.]+$/;

        if (!stringRegex.test(Producto.name)) {
            alert("El nombre solo puede contener letras");
            return false;
        }
        if (!numberRegex.test(Producto.price)) {
            alert("El precio solo puede contener numeros");
            return false;
        }
        if (!stringRegex.test(Producto.description)) {
            alert("La descripcion solo puede tener letras o numero")
            return false;
        }
        if (!stringRegex.test(Producto.category)) {
            alert("La categoria solo puede tener letras")
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateData()) {
            return;
        }

        const formData = new FormData();
        formData.append("name", Producto.name);
        formData.append("price", Producto.price);
        formData.append("description", Producto.description);
        formData.append("image", Producto.image); // Añadir la imagen como archivo
        formData.append("category", Producto.category);

        axios
            .post("http://localhost:3002/product", formData)
            .then((res) => {
                console.log(res);
                setProducto({
                    name: "",
                    price: "",
                    description: "",
                    image: null, // Cambiar a null para representar un archivo
                    category: "",
                });
                alert("Producto creado correctamente");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div className="w-full h-full">
            <form className="flex flex-col items-center justify-center h-full py-20 " onSubmit={handleSubmit}>
                <label>
                    Nombre:
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={Producto.name}
                    onChange={handleChange}
                />
                <br />
                <label>
                    Precio:
                </label>
                <input
                    type="text"
                    name="price"
                    placeholder="Precio"
                    value={Producto.price}
                    onChange={handleChange}
                />
                <br />
                <label>
                    Descripcion:
                </label>
                <input
                    type="text"
                    name="description"
                    placeholder="Descripcion"
                    value={Producto.description}
                    onChange={handleChange}
                />
                <br />
                <label>
                    Imagen:
                </label>
                <input
                    type="file"
                    name="image"
                    placeholder="Imagen"
                    onChange={handleChange}
                />
                <br />
                <label>
                    Categoria:
                </label>
                <select
                    name="category"
                    value={Producto.category}
                    onChange={handleChange}
                >
                    <option value="">Categoira</option>
                    {Categoria.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <br />
                <button type="submit">
                    Crear
                </button>
            </form>
        </div>
    )

}