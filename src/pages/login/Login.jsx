import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Wrapper } from './Login.styles'

const Login = () => {
  return (
    <Wrapper>
      <div>
        <h1>faça seu login</h1>
      </div>
      <div className="text-field">
        <TextField id="outlined-basic" label="login" variant="outlined" />
        <TextField id="outlined-basic" label="senha" variant="outlined" />
      </div>

      <div className="button">
        <Button variant="outlined">Entrar</Button>
      </div>
    </Wrapper>
  )
}

export default Login
