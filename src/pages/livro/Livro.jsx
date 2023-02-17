import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './Livros.styles'
import HomeIcon from '@mui/icons-material/Home'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Livro = () => {
  const livrosData = JSON.parse(localStorage.getItem('livros') || '[]')

  return (
    <Wrapper>
      <div className="miniMenu">
        <Link to="/artigos">
          <ArrowBackIcon />
        </Link>
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="detail">
        <div className="detail__header">
          <h1>{livrosData.title}</h1>
        </div>
        <div className="detail__infos">
          <div className="detail__img">
            <img src={livrosData.frontCover} />
          </div>
          <span className="detail__description">
            {livrosData.content.map(li => li.introduction)}
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Livro
