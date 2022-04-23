import styles from '../styles/Entradas.module.css'
import Link from "next/link"
import Image from "next/image"

const Cursos = ({ cursos }) => {
    const { titulo, imagen, contenido, url } = cursos
    return (
        <div>
            <article>
                <Image layout="responsive" width='700px' height='400px' src={imagen.url} alt={`imagen blog ${titulo}`} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.resumen}>{contenido}</p>
                    <Link href={`/cursos/${url}`}>
                        <a className={styles.enlace}>Ver mas</a>
                    </Link>
                </div>
            </article>
        </div>
    );
}

export default Cursos;
