import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import livrosMock from '../../mocks/livros.json'

const Livro = () => {
  const params = useParams()

  const livrosId = params.id

  const getAllLivros = livrosMock.map(lv => lv.id)

  if (livrosId === getAllLivros) {
    console.log('a')
    livrosMock.map(li => li.title)
  }

  return (
    <Layout>
      <ul></ul>
    </Layout>
  )
}
export default Livro
