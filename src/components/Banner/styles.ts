import styled from "styled-components";
import Banner from '../../assets/images/banner.jpg';

export const Container = styled.section`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 16px;
  margin: 10px 0 20px;

  background-image: url(${Banner});
  background-size: cover;
  background-repeat: no-repeat;
`;
