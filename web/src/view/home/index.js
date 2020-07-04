import React, { useState, useEffect } from 'react';
import * as S from './styles';

//Components
import Catalago from '../../components/catalago';
import Menu from '../../components/menu';

//Services
import Api from '../../services/';

export default function Home() {
  const [item, setItem] = useState([]);


  async function BuscarFilmes() {
    await Api.get('/filmes')
      .then(response => {
        setItem(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  async function ExcluirFilmes(_id) {
    await Api.delete(`/filmes/${_id}`)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    BuscarFilmes();
  }, []);

  return (
    <div>
      <Menu />
      <S.Container>
        {item.map((item, index) => {
          return (
            <Catalago
              key={index}
              id={item._id}
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
              onClick={() => ExcluirFilmes(item._id)}
            />
          )
        })
        }
      </S.Container >
    </div>
  )
}