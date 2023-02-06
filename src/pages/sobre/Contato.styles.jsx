import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1060px;
  margin: 20px auto;

  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 10px;
    gap: 40px;
    .dados {
      padding: 0px;
      list-style: none;
    }
    .dados li {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }
    .dados li::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 2px;
      background: #ddd;
      margin-right: 10px;
    }
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    width: 300px;
  }

  .animeLeft {
    transform: translateX(-20px);
    opacity: 0;
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`
