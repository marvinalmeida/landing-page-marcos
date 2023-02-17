import * as React from 'react'
import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
import { Wrapper } from './card.styles'
import { useState } from 'react'

export default function ActionAreaCard({ livro }) {
  const handleClick = li => {
    localStorage.setItem('livros', JSON.stringify({ ...li }))
  }

  return (
    <>
      <Wrapper>
        <button onClick={() => handleClick(livro)}>
          <Link style={{ textDecoration: 'none' }} to={`/livro/${livro.id}`}>
            <Card sx={{ borderRadius: '10px' }}>
              <div className="container">
                <div className="img-name">
                  <img src={livro.frontCover} alt="imagem de capa" />
                  <span>{livro.title}</span>
                </div>
              </div>
            </Card>
          </Link>
        </button>
      </Wrapper>
    </>
  )
}
