import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import Footer from './Footer';

import styles from '../styles/Header.module.css'

const Header = ({ children, pagina, guitarras }) => {

    const router=useRouter()

    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Pagina de ventas de guitarras" alt='Imagen del logo' />
                <link rel="shortcut icon" href="../img/cart.svg" type="image/x-icon"></link>
            </Head>

            <header className={styles.header}>
                <div className='contenedor'>
                    <div className={styles.barra}>

                        <Link href='/'><a><Image priority='true' width={400} height={100} src='/img/logo.svg' /></a></Link>

                        <nav className={styles.navegacion}>
                            <Link href='/'>Inicio</Link>
                            <Link href='/nosotros'>Nosotros</Link>
                            <Link href='/blog'>Blog</Link>
                            <Link href='/tienda'>Tienda</Link>
                        </nav>
                    </div>
                    {guitarras &&
                        <div className={styles.modelo}>
                           <h2>Modelo {guitarras.nombre}</h2> 
                           <p>{guitarras.descripcion}</p>
                           <p className={styles.precio}>${guitarras.precio}</p>
                        </div>
                    }
                </div>

                    {/* Para que la animacionde la guitarra solo aparesca en la pagina de inicio */}
                    {router.pathname === '/' && (<img className={styles.guitarra} src='/img/header_guitarra.png' alt='Imagen header Guitarra' />)}

            </header>


            {children}

            <Footer />
        </div>
    );
}

Header.defaultProps = {
    guitarras: null
}

export default Header;
