import styled from 'styled-components'

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    border: none;
  }
  .container {
    margin: 20px 20px;
    display: flex;
    flex-direction: column;

    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;

    :hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .img-name {
    img {
      max-width: 100%;
      width: 200px;
      margin-bottom: 10px;
      height: 280px;
      border-radius: 10px;
    }
    span {
      width: 180px;
      /* overflow: hidden !important;
      text-overflow: ellipsis;
      white-space: nowrap; */
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: bold;
      text-transform: capitalize;
    }
    display: flex;
    flex-direction: column;
  }

  .ano-duracao {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    border: none;
  }
`
