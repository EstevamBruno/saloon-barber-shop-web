import styled from "styled-components";

export const ProductCard = styled.div`
  padding: 20px 30px 0;
  display: flex;
  flex: 1;

  img {
    width: 130px;
    height: 130px;
    border-radius: 6px;
    margin-right: 10px;
  }
`;

export const ProductInformations = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
      }
   }

   div + div {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
   }
`;
