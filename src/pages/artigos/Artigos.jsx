import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import livrosMock from '../../mocks/livros.json'
import { Wrapper } from './Artigos-styles'

const Artigos = () => {
  return (
    <Layout>
      <Wrapper>
        <ul>
          {livrosMock.map(livro => (
            <Link to={`/livro/${livro.id}`} key={livro.id}>
              <img src={livro.frontCover} alt="capa do livro" />
              <li>{livro.title}</li>
              <li>{livro.author}</li>
            </Link>
          ))}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default Artigos
