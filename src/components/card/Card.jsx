import * as React from 'react'
import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
import { Wrapper } from './card.styles'

export default function ActionAreaCard({ livro }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/livro/${livro.id}`}>
      <Card sx={{ borderRadius: '10px' }}>
        <Wrapper>
          <div className="container">
            <div className="img-name">
              <img src={livro.frontCover} alt="imagem de capa" />
              <span>{livro.title}</span>
            </div>
          </div>
        </Wrapper>
      </Card>
    </Link>
  )
}
