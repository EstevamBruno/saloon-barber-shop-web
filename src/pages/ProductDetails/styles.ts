import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: #6c757d;
`;

export const Infos = styled.section`
  background-color: #fff;
  max-width: 380px;
  height: 100%;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 18px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: 500;
    }

    span + span {
      font-size: 16px;
      font-weight: none;
      width: 90px;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export const Galery = styled.section`
  background-color: #fff;
  width: 350px;
  height: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    flex: 1;

    img.product-detail-img {
      width: 100%;
      height: 90%;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25)
    }
  }
`;
