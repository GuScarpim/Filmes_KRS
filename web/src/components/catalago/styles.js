import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 15%;
  width: 50ch;
  height: 55ch;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  border: 15px solid white;
  background-color: #FFF;

  img {
  width: 355px;
  height: 142px;
  }
  &:hover {
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.5);
  }
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 30px;
`