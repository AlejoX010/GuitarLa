import Header from "../../components/Header";
import Image from "next/image";
import styles from '../../styles/Entradas.module.css'

const EntradaBlog = ({ entrada}) => {

    const { contenido, imagen, published_at, titulo } = entrada[0]

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
        <Header pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada }>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                    <p className={styles.text}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Header>
    );
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    const paths = entradas.map(entrada => ({
        params: { url: entrada.url  }
    }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params: { url } }) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
    const respuesta = await fetch(urlBlog);
    const entrada = await respuesta.json();
    return {
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({ query: { id } }) {
//     const url = `http://localhost:1337/blogs/${id}`;
//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();
//     return {
//         props: {
//             entrada
//         }
//     }
// }

export default EntradaBlog;
