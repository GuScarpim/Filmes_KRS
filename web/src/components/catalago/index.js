import React from 'react';
import * as S from './styles';

//Imagens
import Aladin from '../../assets/aladin.jpg';
import Detona from '../../assets/detona.jpg';
import Esquadrao from '../../assets/esquadrao.jpg';
import Sonic from '../../assets/sonic.jpg';
import StarWars from '../../assets/starwars.jpg';
import Vingadores from '../../assets/vingadores.jpg';

//Icons
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//components
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function Catalago({
  titulo, sinopse, genero, data, idioma, legendado, diretor,
  link, avaliacao, img, id, onClick
}) {
  return (
    <S.ContainerCard>
      <S.Card>
        <S.PositionLeft>
          <OverlayTrigger
            placement={'top'}
            overlay={
              <Tooltip id={`tooltip-top`}>
                Excluir filme
              </Tooltip>
            }>
            <button onClick={onClick} className='btn btn-danger'>
              <FaTrashAlt className='action_icon' color='black' />
            </button>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={
              <Tooltip id={`tooltip`}>
                Editar filme
              </Tooltip>
            }>
            <Link to={`/filmes/${id}`} className='btn btn-warning' >
              <FaPen className='action_icon' />
            </Link>
          </OverlayTrigger>
        </S.PositionLeft>

        <h3>{titulo}</h3>
        {
          img === 0 ?
          <img src={Aladin} alt='Imagem Aladin' /> :
          img === 1 ?
          <img src={Detona} alt='Imagem Detona' /> :
          img === 2 ?
          <img src={Esquadrao} alt='Imagem Esquadrao' /> :
          img === 3 ?
          <img src={Sonic} alt='Imagem Sonic' /> :
          img === 4 ?
          <img src={StarWars} alt='Imagem StarWars' /> :
          img === 5 ?
          <img src={Vingadores} alt='Imagem Vingadores' />
          : ''
        }
        <p>{sinopse}</p>
        <p><b>Gênero: </b>{genero}</p>
        <p><b>Data de lançamento:</b> {data}</p>
        <p><b>Idioma:</b> {idioma}</p>
        {legendado ?
          <p><b>Legendado</b></p> :
          <p><b>Sem legenda</b></p>
        }
        <p><b>Diretor:</b> {diretor}</p>
        <p><b>Link do filme: </b>
          <a href={link}>{link}</a>
        </p>
        <S.PositionLeft>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="disabled" value={avaliacao} disabled />
          </Box>
        </S.PositionLeft>
      </S.Card >
    </S.ContainerCard>
  )
}