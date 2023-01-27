import { Wrapper } from '../home/Home.styles'
import Layout from '../../components/layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>textos mais recentes</h1>
        <div className="img-texto">
          <img src="/biblioteca.jpg" alt="livraria" />
          <p>
            Lorem ipsum dolor sit amet. Qui explicabo necessitatibus est
            delectus molestiae et facere nisi quo reprehenderit praesentium ut
            quidem quae ut consequuntur repellendus. Quo nobis minus et
            voluptatem quod ea animi vero vel officia nemo ut harum harum et
            voluptatem voluptatibus! Qui voluptatem explicabo est maiores
            voluptatem est quaerat nisi aut Quis molestias et quia corrupti?
          </p>
        </div>
        <div className="img-texto">
          <img src="/biblioteca.jpg" alt="livraria" />
          <p>
            Lorem ipsum dolor sit amet. Qui explicabo necessitatibus est
            delectus molestiae et facere nisi quo reprehenderit praesentium ut
            quidem quae ut consequuntur repellendus. Quo nobis minus et
            voluptatem quod ea animi vero vel officia nemo ut harum harum et
            voluptatem voluptatibus! Qui voluptatem explicabo est maiores
            voluptatem est quaerat nisi aut Quis molestias et quia corrupti?
          </p>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Home
