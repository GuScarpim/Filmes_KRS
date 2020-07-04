import React, { useState, useEffect } from 'react';
import * as S from './styles';

import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <S.Logo>
            <img src={Logo} />
          </S.Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={'/'}>Home</Link>
            <Link to={'/filmes'}>Cadastrar Filmes</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}