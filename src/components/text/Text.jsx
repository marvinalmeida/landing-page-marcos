import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Wrapper } from './Text.styles'

const Text = () => {
  return (
    <Wrapper>
      <TextField id="outlined-basic" label="Titulo" variant="outlined" />
      <TextField
        id="filled-multiline-static"
        label="escreva seu texto aqui"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <Button variant="outlined">Adicionar</Button>
    </Wrapper>
  )
}

export default Text
