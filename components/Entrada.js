import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Entradas.module.css'


const Entrada = ({ entrada }) => {
    //extracion de las entradas para evitarce poner .entrada
    const { titulo, resumen, imagen, published_at, url } = entrada

    //Para darle un mejor formato a la fecha 
    const formatearFecha = fecha => {
        const fechaNueva = new Date(fecha)

        const opciones = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }

        return fechaNueva.toLocaleDateString('es-ES', opciones)
    }

    return (
        <article>
            <Image layout="responsive" width='700px' height='400px' src={imagen.url} alt={`imagen blog ${titulo}`}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Ver mas</a>
                </Link>
            </div>
        </article>
    );
}

export default Entrada;
