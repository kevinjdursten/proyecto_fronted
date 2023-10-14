import banner from "../kramelo shop arreglos/Edicion Photoshop.jpg"

const Home = () => {

    return (
            <main className="h-screen w-full">
                
                {/* Barra de navegacion*/}
                <nav className="flex justify-end gap-[20px] mr-10 py-[30px]">
                    <a href="/">Home</a>
                    
                    <a href="/Cumpleaños">Cumpleaños</a>

                    <a href="/Regalos">Regalos</a>

                    <a href="/15 años ">15 años</a>

                    <a href="/Aniversarios">Aniversarios</a>

                    <a href="/Bouquets">Bouquets</a>
                    
                    <a href="/Peluches">Peluches</a>

                    <a href="/Globos">Globos</a>

                    <a href="/Graduaciones">Graduaciones</a>

                    <a href="/about">About us</a>

                    <a href="/login">login</a>


                </nav>

                <section className="flex w-full justify-center items-center bg-gray-400 h-[500px]">
                    <img className="w-72 h-72" src={banner} alt="Logo" />
                </section>

            </main>
    );
}

export default Home ;