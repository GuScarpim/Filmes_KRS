import React, { useState, useEffect } from 'react';
import * as S from './styles';

import { Link } from 'react-router-dom';

//Components
import Catalago from '../../components/catalago';

//Services
import Api from '../../services/';

export default function Home() {
  const [item, setItem] = useState([]);

  async function BuscarCards() {
    await Api.get('/filmes')
      .then(response => {
        setItem(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    BuscarCards();
  }, []);

  return (
    <S.Container>
      {item.map((item, index) => {
        return (
          <Catalago
            key={index}
            titulo={item.titulo}
            img={item.img}
            sinopse={item.sinopse}
            genero={item.genero}
            data={item.data}
            legendado={item.legendado}
            idioma={item.idioma}
            diretor={item.diretor}
            link={item.link}
            avaliacao={item.avaliacao}
          />
        )
      })
      }
      <Link to={'/filmes'} className='btn btn-primary'>
        Cadastrar</Link>
    </S.Container>
  )
}