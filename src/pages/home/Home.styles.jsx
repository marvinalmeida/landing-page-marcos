import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 1060px;
  margin: 20px auto;
  h1 {
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
    color: #535353;

    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }

  .img-texto {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    gap: 30px;

    p {
      display: flex;
      align-items: center;
      font-size: 15px;
      border: 1px solid black;
      padding: 10px;
      width: 400px;

      border-radius: 5px;
    }

    img {
      max-width: 100%;
      width: 400px;
    }
  }
`
