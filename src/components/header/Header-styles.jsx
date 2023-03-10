import styled from 'styled-components'

export const Wrapper = styled.header`
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  z-index: 100%;
  top: 0px;
  background-color: #e0e0e0;

  svg {
  }
  .container {
    max-width: 1060px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .logo {
    svg {
      font-size: 50px;
    }
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 5px;

    p {
      font-size: 18px;
      font-weight: bold;
      text-transform: capitalize;
      color: #000000;
    }
  }

  .navegar {
    display: flex;
    align-items: center;
    height: 4rem;
    ul {
      display: flex;
    }
    li {
      margin: 20px;
      list-style: none;
      a {
        padding: 20px 0px;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 18px;
        color: #535353;
        &:hover {
          font-weight: bold;
          color: #000000;
        }
      }
      .active {
        border-bottom: 2px solid #2ed573;
        font-weight: bold;
        padding-bottom: 18px;
        color: #1b1b1b;
      }
    }
  }
`
