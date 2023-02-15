import Layout from '../../components/layout/Layout'
import { Wrapper } from './Contato.styles'

const Contato = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <section className="content animeLeft">
            <img src="contato.jpg" alt="maquina de escrever" />
            <div>
              <h1>Entre em contato</h1>
              <ul className="dados">
                <li>email@.com.br</li>
                <li>88154654599</li>
                <li>Belém PA</li>
              </ul>
            </div>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Contato
