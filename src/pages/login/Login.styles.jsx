import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1060px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
    color: #535353;
    text-transform: capitalize;
  }

  .text-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
  }

  .button {
    display: flex;
    justify-content: end;
    width: 400px;
    margin: 10px 0;
  }
`
