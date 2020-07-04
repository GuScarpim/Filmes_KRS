import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
`
export const Card = styled.div`
  margin-top: 2%;
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
  margin-bottom: 50px;

  .return_icon {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #426CB3;
    color: #000;
  }

  .icon_back {
    margin-top: 3px;
    width: 30px;
    height: 30px;
  }

  label {
    margin-top: 8px;
    font-size: 17px;
    font-weight: bold;
  }
  img {
  width: 50px;
  height: 50px;
  }
  &:hover {
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.5);
  }

  .btn_padrao {
    border-radius: 20px;
    width: 100px;
    height: 35px;
    border: none;
    background-color: #426CB3;
    color: #FFF;

    &:hover {
      background-color: #2959ab;
    }
  }

  @media only screen and (max-width: 670px) { 
    padding: 0px;
   form {
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 450px) { 
    .return_icon {
      width: 35px;
      height: 35px;
    }
    .icon_back {
      margin-top: 3px;
      width: 20px;
      height: 20px;
    }
  }
`

export const PositionImg = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;

  button {
    border: none;
    background: none;
    width: 70px;
    margin-left: 30px;
    margin-right: 10px;
    outline: none;

    &:focus {
      img { 
        opacity: 1; 
      }
  }
  }
  img {
    width: 90px;
    height: 90px;
    opacity: 0.5; 

    &:hover {
      opacity: 0.7
    }
  }
`

export const PositionLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    margin-right: 10px;
  }
`