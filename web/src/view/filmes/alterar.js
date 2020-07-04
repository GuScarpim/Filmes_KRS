import React, { useState, useEffect } from 'react';
import * as S from './styles';

import { Redirect } from 'react-router-dom';

//images
import Aladin from '../../assets/aladin.jpg'
import Detona from '../../assets/detona.jpg'
import Esquadrao from '../../assets/esquadrao.jpg'
import Sonic from '../../assets/sonic.jpg'
import Starwars from '../../assets/starwars.jpg'
import Vingadores from '../../assets/vingadores.jpg'

//Services
import Api from '../../services/';

//Components
import Menu from '../../components/menu';
import NumberFormat from 'react-number-format';

export default function AlterarFilmes({ match }) {
  const [redirect, setRedirect] = useState(false);
  const [item, setItem] = useState([]);
  const [titulo, setTitulo] = useState();
  const [img, setImg] = useState();
  const [sinopse, setSinopse] = useState();
  const [genero, setGenero] = useState();
  const [data, setData] = useState();
  const [legendado, setLegendado] = useState(false);
  const [idioma, setIdioma] = useState();
  const [diretor, setDiretor] = useState();
  const [link, setLink] = useState();
  const [avaliacao, setAvaliacao] = useState();


  async function LoadFilms() {
    await Api.get(`/filmes/${match.params.id}`)
      .then(response => {
        setItem(response.data)
        setTitulo(response.data.titulo)
        setImg(response.data.img)
        setSinopse(response.data.sinopse)
        setGenero(response.data.genero)
        setData(response.data.data)
        setLegendado(response.data.legendado)
        setIdioma(response.data.idioma)
        setDiretor(response.data.diretor)
        setLink(response.data.link)
        setAvaliacao(response.data.avaliacao)
        console.log(response.data)
      })
  }

  async function Alterar() {
    await Api.put(`/filmes/${match.params.id}`, {
      img, sinopse, genero, data, legendado,
      idioma, diretor, link, avaliacao,
    }).then(() => {
      setRedirect(true);
    })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    LoadFilms()
  }, []);

  return (
    <div>
      <Menu />
      <S.Container>
        {redirect && <Redirect to='/' />}
        <S.Card>
          {item.map((item, index) => {
            return (
              <div key={index}>
                <h4>Alterar o filme {item.titulo}</h4>
                <form className={'row mt-4'}>

                  <div className='form-group col-12'>
                    <label>Título</label>
                    <input id='titulo' type='text'
                      className='form-control'
                      placeholder='Insira um titulo'
                      defaultValue={item.titulo} onChange={e => setTitulo(e.target.value)}
                      required />
                  </div>

                  <div className='form-group col'>
                    <label>Gênero</label>
                    <select id='genero'
                      className='form-control'
                      onChange={e => setGenero(e.target.value)}>
                      <option value=''>{item.genero}</option>
                      <option value='Ação'>Ação</option>
                      <option value='Aventura'>Aventura</option>
                      <option value='Comédia'>Comédia</option>
                      <option value='Terror'>Terror</option>
                    </select>

                    <label>Data</label>
                    <NumberFormat id='data'
                      className='form-control'
                      defaultValue={item.data} onChange={e => setData(e.target.value)}
                      format="##/##/####"
                      required />

                    <label>Idioma</label>
                    <input id='idioma' type='text'
                      className='form-control'
                      placeholder='Insira um idioma'
                      defaultValue={item.idioma} onChange={e => setIdioma(e.target.value)}
                      required />
                  </div>

                  <div className='form-group col'>
                    <label>Diretor</label>
                    <input id='diretor' type='text'
                      className='form-control'
                      placeholder='Diretor'
                      defaultValue={item.diretor} onChange={e => setDiretor(e.target.value)}
                      required />

                    <label>Link</label>
                    <input id='link' type='text'
                      className='form-control'
                      placeholder='Insira um link'
                      defaultValue={item.link} onChange={e => setLink(e.target.value)}
                      required />

                    <label>Avaliação</label>
                    <input id='avaliacao' type='number'
                      className='form-control'
                      placeholder='Insira uma avaliacao'
                      defaultValue={item.avaliacao} onChange={e => setAvaliacao(e.target.value)}
                      required />
                  </div>

                  <label className='col-12'>Sinopse</label>
                  <textarea id='sinopse' type='text'
                    className='form-control'
                    placeholder='Sinopse para o filme max-200 caracteres'
                    defaultValue={item.sinopse} onChange={e => setSinopse(e.target.value)}
                    maxLength={200} required />

                  <div className={'form-group'}>
                    <input className="form-check-input mt-3 ml-1" type="radio"
                      id="legendado" defaultValue={item.legendado}
                      checked={legendado ? true : false}
                      onChange={() => setLegendado(!legendado)} />
                    <label className='ml-4'>Legendado</label>

                    <input className="form-check-input mt-3 ml-2" type="radio"
                      id="nao_legendado" defaultValue={item.legendado}
                      checked={legendado ? false : true}
                      onChange={() => setLegendado(false)} />
                    <label className='ml-4'>Sem Legenda</label>
                  </div>
                </form>
                <S.PositionImg>
                  <div className='form-group'>
                    <button onClick={() => setImg(0)}>
                      <img src={Aladin} />
                    </button>

                    <button onClick={() => setImg(1)}>
                      <img src={Detona} />
                    </button>

                    <button onClick={() => setImg(2)}>
                      <img src={Esquadrao} />
                    </button>

                    <button onClick={() => setImg(3)}>
                      <img src={Sonic} />
                    </button>

                    <button onClick={() => setImg(4)}>
                      <img src={Starwars} />
                    </button>

                    <button onClick={() => setImg(5)}>
                      <img src={Vingadores} />
                    </button>
                  </div>
                </S.PositionImg>
                <button className='btn btn-primary' onClick={() => Alterar()}>Enviar</button>
              </div>
            )
          })
          }
        </S.Card>
      </S.Container >
    </div>
  )
}