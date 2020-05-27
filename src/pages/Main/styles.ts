import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  margin-top: 50px;

  img {
    width: 130px;
    height: 130px;
    margin-right: 10px;
    border-radius: 12px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 14px;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      span {
        font-size: 24px;
        margin-right: 5px;
      }
    }
  }
`;
