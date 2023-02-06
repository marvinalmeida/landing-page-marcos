import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import livrosMock from '../../mocks/livros.json'
import { Wrapper } from './Artigos-styles'
import { getAllArticles } from '../../services/artigos.services'
import { useState, useEffect } from 'react'

const Artigos = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getAllArticles()
      .then(response => {
        setArticles(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  console.log(articles)

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
