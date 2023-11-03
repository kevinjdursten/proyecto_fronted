import "../Resources/Css/fondo.css";
import info from "../Resources/Js/Object";

export function About() {
    return (
        <section className="w-full h-full text-[white]">
            {info.map((item) => (
                <div className="flex py-10">
                    <div key={item.id} className="w-1/2">
                        <h1 className="leading-loose text-center py-2 text-2xl font-mono">
                            {item.title}
                        </h1>
                        <p className="leading-relaxed text-justify py-2 px-8 font-mono">
                            {item.description}
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img className="rounded-full w-[240px] h-[300px]" src={item.img} alt="kramelo shop" />
                    </div>
                </div>
            ))}
        </section>
    )
}
