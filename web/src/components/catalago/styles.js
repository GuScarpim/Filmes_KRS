import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 15%;
  width: 50ch;
  height: 55ch;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  border: 15px solid white;
  background-color: #FFF;
  overflow: scroll;

  .action_icon {
    color: #000;
  }

  @media only screen and (max-width: 600px) {
    width: 40ch;
    height: 45ch;

    img {
      width: 300px;
      height: 142px;
      box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.6);
    }
  }
  @media only screen and (max-width: 450px) {
    width: 33ch;
    height: 40ch;

    img {
      width: 200px !important;
      height: 102px !important;
      box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.6);
    }

    h3 {
      font-size: 20px;
    }
    .action_icon {
      display: flex;
      margin-left: -5px;
    }
    button {
      width: 30px;
      height: 30px;
    }
    a {
      &:nth-child(2) {
        width: 30px;
        height: 30px;
      }
    }
    p {
      font-size: 13px;
    }
  }

  img {
  width: 355px;
  height: 142px;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.6);
  }
  &:hover {
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 10);
  }

  a {
    text-align: left;
  }

  p {
    margin-top: -5px;
    text-align: left;
    &:nth-child(4) {
    text-align: center;
    margin-top: 5px;
    font-family: 'Times New Roman'  ;
    border-bottom: 2px solid #000;
  }
  } 
 
`

export const ContainerCard = styled.div`
  display: flex;
  padding: 30px;
`

export const PositionLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-right: 10px;
  }
`