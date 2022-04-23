import Header from '../components/Header'
import styles from '../styles/Blog.module.css'
import Cursoss from '../components/Cursos';

const Cursos = ({cursos}) => {
   
    return (
        <Header pagina='Cursos'>
              <main className='contenedor'>
                <h2 className='heading'>Nuestros Cursos</h2>

                <div className={styles.blog}>
                    {cursos.map(cursos=>(<Cursoss key={cursos.id} cursos={cursos} />))}
                </div>
            </main>
        </Header>
    );
}

//Para hacer las consultas a las apis
export async function getStaticProps() {
    const url = `${process.env.API_URL}/cursosses`;
    const respuesta = await fetch(url);
    const cursos = await respuesta.json();
    return {
        props: {
            cursos
        }
    }
}

export default Cursos;
