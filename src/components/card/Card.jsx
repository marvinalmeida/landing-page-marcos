import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ActionAreaCard({ livro }) {
  console.log(livro)
  return (
    <Card
      sx={{
        maxWidth: '300px',
        borderRadius: 4,
        margin: '20px'
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={livro.frontCover} alt="capa livro" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span style={{ fontSize: '20px' }}>
              {livro.content.map(article => article.title)}
            </span>
          </Typography>
          {livro.author}
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
