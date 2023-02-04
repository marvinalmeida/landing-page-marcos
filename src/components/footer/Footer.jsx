import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          height: '120px',
          fontSize: '12px',
          backgroundColor: '#000000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffff'
        }}
      >
        <span>© 2023. Feito com ❤ pela equipe do Marvin.</span>
      </Box>
    </>
  )
}

export default Footer
