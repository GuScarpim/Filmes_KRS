import React, { useState } from 'react';
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
import Api from '../../services';

//components
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu';
import NumberFormat from 'react-number-format';

//icons
import { TiArrowBack } from 'react-icons/ti'

export default function Cadastrar() {
  const [redirect, setRedirect] = useState(false);
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

  async function Cadastrar() {
    await Api.post('/filmes/', {
      titulo, img, sinopse, genero, data, legendado,
      idioma, diretor, link, avaliacao,
    }).then(response => {
      setRedirect(true)
      console.log(response.data);
    })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <Menu />
      <S.Container>
        {redirect && <Redirect to='/' />}
        <S.Card>
          <S.PositionLeft>
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  Voltar
              </Tooltip>
              }>
              <Link to={'/'} className='return_icon'>
                <TiArrowBack className='icon_back' />
              </Link>
            </OverlayTrigger>
          </S.PositionLeft>
          <h4>Cadastre um filme</h4>
          <form className={'row mt-4'}>

            <div className='form-group col-12'>
              <label>Título</label>
              <input id='titulo' type='text'
                maxLength={30}
                className='form-control'
                placeholder='Insira um titulo'
                value={titulo} onChange={e => setTitulo(e.target.value)}
                required />
            </div>

            <div className='form-group col'>
              <label>Gênero</label>
              <select id='genero'
                className='form-control'
                onChange={e => setGenero(e.target.value)}>
                <option value=''>Selecione uma opção</option>
                <option value='Ação'>Ação</option>
                <option value='Aventura'>Aventura</option>
                <option value='Comédia'>Comédia</option>
                <option value='Terror'>Terror</option>
              </select>

              <label>Data</label>
              <input id='data' type='date'
                className='form-control'
                placeholder='Insira uma data'
                value={data} onChange={e => setData(e.target.value)}
                required />

              <label>Idioma</label>
              <input id='idioma' type='text'
                maxLength={20}
                className='form-control'
                placeholder='Insira um idioma'
                value={idioma} onChange={e => setIdioma(e.target.value)}
                required />
            </div>

            <div className='form-group col'>
              <label>Diretor</label>
              <input id='diretor' type='text'
                maxLength={30}
                className='form-control'
                placeholder='Diretor'
                value={diretor} onChange={e => setDiretor(e.target.value)}
                required />

              <label>Link</label>
              <input id='link' type='text'
                maxLength={150}
                className='form-control'
                placeholder='Insira um link'
                value={link} onChange={e => setLink(e.target.value)}
                required />

              <label>Avaliação</label>
              <NumberFormat id='avaliacao'
                displayType={'number'} format='#'
                className='form-control'
                placeholder='Insira uma avaliacao'
                value={avaliacao} onChange={e => setAvaliacao(e.target.value)}
                required />
            </div>

            <label className='col-12'>Sinopse</label>
            <textarea id='sinopse' type='text'
              className='form-control'
              placeholder='Sinopse para o filme max-200 caracteres'
              value={sinopse} onChange={e => setSinopse(e.target.value)}
              maxLength={200} required />

            <div className={'form-group'}>
              <input className="form-check-input mt-3 ml-1" type="radio"
                id="legendado" value={legendado}
                checked={legendado ? true : false}
                onChange={() => setLegendado(!legendado)} />
              <label className='ml-4'>Legendado</label>

              <input className="form-check-input mt-3 ml-2" type="radio"
                id="nao_legendado" value={legendado}
                checked={legendado ? false : true}
                onChange={() => setLegendado(false)} />
              <label className='ml-4'>Sem Legenda</label>
            </div>
          </form>
          <S.PositionImg>
            <div className='form-group'>
              <button onClick={() => setImg(0)}>
                <img src={Aladin} alt='Imagem Aladin' />
              </button>

              <button onClick={() => setImg(1)}>
                <img src={Detona} alt='Imagem Detona' />
              </button>

              <button onClick={() => setImg(2)}>
                <img src={Esquadrao} alt='Imagem Esquadrao' />
              </button>

              <button onClick={() => setImg(3)}>
                <img src={Sonic} alt='Imagem Sonic' />
              </button>

              <button onClick={() => setImg(4)}>
                <img src={Starwars} alt='Imagem Starwars' />
              </button>

              <button onClick={() => setImg(5)}>
                <img src={Vingadores} alt='Imagem Vingadores' />
              </button>
            </div>
          </S.PositionImg>
          <button className='btn_padrao'
            onClick={() => Cadastrar()}>
            Enviar
          </button>
        </S.Card>
      </S.Container>
    </div>
  )
}