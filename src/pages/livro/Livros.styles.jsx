import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  background-color: #b8cfec;
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .detail__infos {
    display: flex;
  }

  .detail__header {
    margin: 20px 0;
    padding: 12px;
  }

  .detail__img {
    width: 400px;
  }

  .detail__img img {
    width: 100%;
    border-radius: 4px;
  }

  .detail__description {
    font-size: 18px;
    max-width: 600px;
    padding: 0 20px;
  }

  .miniMenu {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  @media (max-width: 768px) {
    .detail__infos {
      flex-direction: column;
      gap: 10px;
    }

    .detail__img {
      width: 100%;
      margin: 0;
      border-radius: 0;
    }

    .detail__img img {
      border-radius: 0;
    }
  }
`
