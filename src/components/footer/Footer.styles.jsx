import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 12px;
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
  .container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 50px 10px;
    .svg {
      svg {
        margin: 5px;
      }
    }
  }
  span {
    text-transform: capitalize;
    color: white;
  }
`
