import Link from 'next/link'
import styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                </nav>
                <Link href='https://reverent-khorana-5617cf.netlify.app/' target="_blank" ><p>&copy; Anuar Hernandez</p></Link>
            </div>
        </footer>
    );
}

export default Footer;
