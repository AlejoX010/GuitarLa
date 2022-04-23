import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import Header from "../../components/Header";

const Producto = ({ guitarra }) => {
  const { nombre, descripcion, imagen, precio } = guitarra;

  return (
    <Header pagina={nombre}>
      <main className="contenedor">
        <div className={styles.guitarra}>
          <Image
            layout="responsive"
            width={150}
            height={350}
            src={imagen.url}
            alt={`Imagen guitarra ${nombre}`}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/tienda`}>
              <a className={styles.enlace}>Volver</a>
            </Link>
          </div>
        </div>
      </main>
    </Header>
  );
};

/*export async function getStaticPaths() {
    const url = `${process.env.API_URL}/tienda`;
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
    const urlTienda = `${process.env.API_URL}/tienda?url=${url}`;
    const respuesta = await fetch(urlTienda);
    const guitarra = await respuesta.json();
    return {
        props: {
            guitarra
        }
    }
}*/

export async function getServerSideProps({ query: { id } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${id}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}

export default Producto;
