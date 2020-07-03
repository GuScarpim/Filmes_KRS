import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
`
export const Card = styled.div`
  margin-top: 15%;
  width: 80%;
  height: 100%;
  border-radius: 5px;
  background-size: cover;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  border: 15px solid white;
  background-color: #FFF;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;

  label {
    font-size: 16px;
    font-weight: bold;
  }
  img {
  width: 50px;
  height: 50px;
  }
  &:hover {
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.5);
  }
`