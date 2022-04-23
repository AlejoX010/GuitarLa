import Header from '../components/Header'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import styles from '../styles/Guitarra.module.css'
import Link from 'next/link'
import Blog from '../components/Blog'


export default function Home({ guitarras, cursos, entradas }) {
  return (
    <Header pagina='Inicio' guitarras = {guitarras[1]}>
      <main className='contenedor'>
        <h1 className='heading' >Nuestra Coleccion</h1>
        <Listado guitarras={guitarras} /> <br />
      </main>
      <Curso cursos={cursos} />
      <div className='contenedor'>
      <Blog entradas={entradas} />
      </div>

    </Header>
  )
}

export async function getServerSideProps() {
  //Asi es la forma correcta de extraer appis de manera optima
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=3&`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlog)
  ])

  const [guitarras, cursos, entradas] = await Promise.all([
    resGuitarras.json(), resCursos.json(), resBlog.json()
  ])

  return {
    props: {
      guitarras,
      cursos,
      entradas
    }
  }
}
