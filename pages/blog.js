import Header from '../components/Header'
import Blogs from '../components/Blog';


const Blog = ({entradas}) => {

    return (
        <Header pagina='Blog'>
            <main className='contenedor'>
                <Blogs entradas = {entradas}/>
            </main>
        </Header>

    ); 
}
//Para hacer las consultas a las apis
export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    return {
        props: {
            entradas
        }
    }
}

export default Blog;