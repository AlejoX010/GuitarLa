import Link from "next/link";
import Image from "next/image";


const Curso = ({ cursos }) => {

    const { titulo, contenido, imagen } = cursos

    return (
        <section>
            <div className="contenedor">
                <div>
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>
                    <Link href='/cursos'><a className="a">Vamos</a></Link>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem; 
                    background-image: linear-gradient(to right, rgb(0 0 0 / .8),rgb(0 0 0 / .7)),url(${imagen.url});
                    background-size: cover;
                    background-position: 50%; 
                    color: #fff;
                }

                section p{
                    text-align: justify;
                }

                .a{
                    margin-top: 3rem;
                    display: inline;
                    text-decoration: none;
                    color: #fff;
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                    font-weight: 800;
                    border: 2px solid #fff;
                    padding: 1rem 3rem;
                    transition-property: background-color, color;
                    transition-duration: .5s;
                }

                .a:hover{
                    border: 2px solid #dd6300;
                    color: #ffffff;
                    background-color: #dd6300;
                }
            `}</style>
        </section>
    );
}

export default Curso;
