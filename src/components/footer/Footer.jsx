import React from 'react'
import { Wrapper } from './Footer.styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="titulo">
          <span>feito por: Marvin Almeida</span>
        </div>
        <div className="svg">
          <WhatsAppIcon />
          <FacebookIcon />
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
