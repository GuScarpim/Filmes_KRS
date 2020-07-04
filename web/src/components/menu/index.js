import React from 'react';
import * as S from './styles';

import { Link } from 'react-router-dom';

//icons imgs
import { FaHome, FaFilm } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

import { Navbar, Nav } from 'react-bootstrap';

export default function Menu() {
  return (
    <S.Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <S.Logo>
            <img src={Logo} alt='imagem logo' />
          </S.Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={'/'}><b>
              <FaHome className='icon' />
              Home</b>
            </Link>
            <Link to={'/filmes'}><b>
              <FaFilm className='icon' />
              Cadastrar Filmes</b>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </S.Container>
  )
}