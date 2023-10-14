const Home = () => {

    return (
            <main className="h-screen w-full">
                
                {/* Barra de navegacion*/}
                <nav className="flex justify-end gap-[20px] mr-10 py-[30px]">
                    <a href="/">Home</a>
                    
                    <a href="/Cumpleaños">Cumpleaños</a>

                    <a href="/15 años ">15 años</a>

                    <a href="/Aniversarios">Aniversarios</a>

                    <a href="/Bouquets">Bouquets</a>
                    
                    <a href="/Peluches">Peluches</a>

                    <a href="/Globos">Globos</a>

                    <a href="/Graduaciones">Graduaciones</a>

                    <a href="/about">About us</a>

                    <a href="/login">login</a>

                    <a href="/login">login</a>


                </nav>

                <section className="flex w-full justify-center items-center bg-gray-400 h-[500px]">
                    <img className="w-72 h-72" src="https://images.vexels.com/media/users/3/223411/isolated/preview/7a8154be7b9b50412fc2cf63b636e370-icono-de-tienda-tienda-plana.png" alt="Logo" />
                </section>

            </main>
    );
}

export default Home ;