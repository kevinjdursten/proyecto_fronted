import Img from "../Resources/Img/Edicion Photoshop.jpg";
import Img1 from "../Resources/Img/dinosaurio.jpg";
import Img2 from "../Resources/Img/blancanieves.jpg";
import Img3 from "../Resources/Img/buchanan.jpg";
import Img4 from "../Resources/Img/durmiente.jpg";
import Img5 from "../Resources/Img/arreglo stitch.jpg";
import Img6 from "../Resources/Img/rosa.jpg";

const Home = () => {
    return (
        <>
            <section className="flex w-full h-full">
                <img src={Img} alt="" />
            </section>
            <div className="gris grid-cols-4" >
                <div className="col-span-1">
                    <div className="item">
                        <span className="titulo-item">arreglo de dinosaurio</span>
                        <img src={Img1} alt="/kramelo shop arreglos/dinosaurio.jpg" className="img-item" />
                        <span className="precio-item">$25</span>
                        <button className="boton-item">Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="item">
                        <span className="titulo-item">cilindro con perfume y pack de cartas tematico Blancanieves</span>
                        <img src={Img2} alt="/kramelo shop arreglos/blancanieves.jpg" className="img-item" />
                        <span className="precio-item">$30</span>
                        <button className="boton-item">Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="item">
                        <span className="titulo-item">caja de madera Buchanan Deluxe 12 Años</span>
                        <img src={Img3} alt="/kramelo shop arreglos/buchanan.jpg" className="img-item" />
                        <span className="precio-item">$25</span>
                        <button className="boton-item">Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="item">
                        <span className="titulo-item">cilindro con perfume y pack de cartas tematico La Bella Durmiente</span>
                        <img src={Img4} alt="/kramelo shop arreglos/durmiente.jpg" className="img-item" />
                        <span className="precio-item">$30</span>
                        <button className="boton-item">Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="item">
                        <span className="titulo-item">arreglo y bolso Stitch</span>
                        <img src={Img5} alt="/kramelo shop arreglos/arreglo stitch.jpg" className="img-item" />
                        <span className="precio-item">$25</span>
                        <button className="boton-item">Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="item">
                        <span className="titulo-item">caja con rosa artificial y globos</span>
                        <img src={Img6} alt="/kramelo shop arreglos/rosa.jpg" className="img-item" />
                        <span className="precio-item">$30</span>
                        <button className="boton-item">Agregar al Carrito</button>
                    </div>
                </div>
                <div>
                    <div className="carrito-item">
                        <img src="" width="80px" alt=" " />
                        <div className="carrito-item-detalles">
                            <span className="carrito-item-titulo"></span>
                            <div className="selector-cantidad">
                                <i className="fa-solid fa-minus restar-cantidad"></i>
                                <i className="fa-solid fa-plus sumar-cantidad"></i>
                                <input type="text" value="1" className="carrito-item-cantidad" disabled />
                            </div>
                            <span className="carrito-item-precio">$0</span>
                        </div>
                        <span className="btn-eliminar">
                            <i className="fa-solid fa-trash"></i>
                        </span>
                    </div>
                    <div className="carrito-item">
                        <img src="" width="80px" alt="" />
                        <div className="carrito-item-detalles">
                            <span className="carrito-item-titulo"></span>
                            <div className="selector-cantidad">
                                <i className="fa-solid fa-minus restar-cantidad"></i>
                                <i className="fa-solid fa-plus sumar-cantidad"></i>
                                <input type="text" value="3" className="carrito-item-cantidad" disabled />
                            </div>
                            <span className="carrito-item-precio">$0</span>
                        </div>
                        <button className="btn-eliminar">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div className="carrito-total">
                    <div className="fila">
                        <strong>Tu Total</strong>
                        <span className="carrito-precio-total">
                            $0
                        </span>
                    </div>
                    <button className="btn-pagar">Pagar<i className="fa-solid fa-bag-shopping"></i> </button>
                </div>
            </div>
        </>
    );
}

export default Home;