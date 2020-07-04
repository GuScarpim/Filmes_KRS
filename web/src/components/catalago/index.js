import React from 'react';
import * as S from './styles';

import Aladin from '../../assets/aladin.jpg';
import Detona from '../../assets/detona.jpg';
import Esquadrao from '../../assets/esquadrao.jpg';
import Sonic from '../../assets/sonic.jpg';
import StarWars from '../../assets/starwars.jpg';
import Vingadores from '../../assets/vingadores.jpg';

//Icons
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Catalago({
  titulo, sinopse, genero, data, idioma, legendado, diretor,
  link, avaliacao, img, id, onClick
}) {
  return (
    <S.ContainerCard>
      <S.Card>
        <S.PositionBtn>
          <button onClick={onClick} className='btn btn-danger'>
            <FaTrashAlt />
          </button>
          <Link to={`/filmes/${id}`} className='btn btn-warning' >
            <FaPen />
          </Link>
        </S.PositionBtn>

        <h3>{titulo}</h3>
        {
          img === 0 ?
            <img src={Aladin} /> :
            img === 1 ?
              <img src={Detona} /> :
              img === 2 ?
                <img src={Esquadrao} /> :
                img === 3 ?
                  <img src={Sonic} /> :
                  img === 4 ?
                    <img src={StarWars} /> :
                    img === 5 ?
                      <img src={Vingadores} />
                      : ''
        }
        <p>{sinopse}</p>
        <p>{genero}</p>
        <p>{data}</p>
        <p>{idioma}</p>
        {legendado ?
          <p>Legendado</p> :
          <p>Sem legenda</p>
        }
        <p>{diretor}</p>
        <a href={link}>{link}</a>
        <p>{avaliacao}</p>
      </S.Card >
    </S.ContainerCard>
  )
}