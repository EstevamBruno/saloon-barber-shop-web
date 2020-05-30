import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 10px 0;
`;

export const ProductCard = styled.div`
  margin: 0 5px 10px;
  padding: 5px 10px;
  border-radius: 16px;
  display: flex;
  flex: 1;
  background-color: #FFF;

  img {
    width: 130px;
    height: 130px;
    margin-right: 10px;
  }
`;

export const ProductInformations = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex: 1;

   div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        color: #6c757d;
      }
   }

   div + div {
     display: flex;
     flex-direction: row;
     justify-content: space-between;

    a {
      color: #6c757d;
      transition: color 0.2s;
      text-decoration: none;

      :hover {
        color: #ccc;
      }
    }
   }
`;
