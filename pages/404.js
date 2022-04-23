import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/NoEncontrado.module.css'

const NoEnconctrado = () => {
    return (
        <div>
            <Head>
                <title>GuitarLA - 404 Error</title>
                <meta name="viewport" content="Pagina de ventas de guitarras" alt='Imagen del logo' />
                <link rel="shortcut icon" href="../img/cart.svg" type="image/x-icon"></link>
            </Head>

            <div className={styles.contenedor}>
                <h1 >Pagina no encontrada</h1>
                <p>Lo sentimos pero no pudimos encontrar la direccion url, favor de ingresar una url valida o</p>
                <Link href='/'>Volver a Inicio</Link>
            </div>
         
        </div>
    );
}

export default NoEnconctrado;
