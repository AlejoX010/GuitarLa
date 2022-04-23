import Header from "../../components/Header";
import Image from "next/image";
import styles from '../../styles/Entradas.module.css'

const EntradaCursos = ({ cursos }) => {

    const { titulo, imagen, contenido } = cursos[0]

    return (
        <Header pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada }>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                    <p className={styles.text}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Header>
    );
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/cursosses`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    const paths = entradas.map(cursos => ({
        params: { url: cursos.url  }
    }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params: { url } }) {
    const urlCursos = `${process.env.API_URL}/cursosses?url=${url}`;
    const respuesta = await fetch(urlCursos);
    const cursos = await respuesta.json();
    return {
        props: {
            cursos
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

export default EntradaCursos;
