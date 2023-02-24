import Layout from '../../components/layout/Layout'
import { Wrapper } from './Artigos-styles'
import { getAllArticles } from '../../services/artigos.services'
import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import ActionAreaCard from '../../components/card/Card'
import livrosMock from '../../mocks/livros.json'

const Artigos = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getAllArticles()
      .then(response => {
        setArticles(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <Layout>
      <Wrapper>
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '20px',
            marginBottom: '20px',
            gap: '40px'
          }}
        >
          {livrosMock.map(livro => (
            <>
              <ActionAreaCard key={livro.id} livro={livro} />
            </>
          ))}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Artigos
