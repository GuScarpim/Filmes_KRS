import React, { useState, useEffect } from 'react';
import * as S from './styles';

//Services
import Api from '../../services/';

export default function Filmes() {
  const [item, setItem] = useState([]);
  const [titulo, setTitulo] = useState();
  const [sinopse, setSinopse] = useState();
  const [genero, setGenero] = useState();
  const [data, setData] = useState();
  const [legendado, setLegendado] = useState();
  const [naolegendado, setNaoLegendado] = useState();
  const [idioma, setIdioma] = useState();
  const [diretor, setDiretor] = useState();
  const [link, setLink] = useState();
  const [avaliacao, setAvaliacao] = useState();

  async function BuscarCards() {
    await Api.post('/filmes')
      .then(response => {
        setItem(response.data)
        setTitulo(response.data.titulo)
        setSinopse(response.data.sinopse)
        setGenero(response.data.genero)
        setData(response.data.data)
        setLegendado(response.data.legendado)
        setIdioma(response.data.idioma)
        setDiretor(response.data.diretor)
        setLink(response.data.link)
        setAvaliacao(response.data.avaliacao)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
  }, []);

  return (
    <S.Container>
      <S.Card>
        <h4>Cadastre um filme</h4>
        <form className={'row mt-4'}>

          <div className='form-group col-12'>
            <label>Título</label>
            <input id='titulo' type='text'
              className='form-control'
              placeholder='Insira um titulo'
              value={titulo}
              required />
          </div>

          <div className='form-group col'>
            <label>Gênero</label>
            <input id='genero' type='text'
              className='form-control'
              placeholder='Insira um genero'
              value={genero}
              required />

            <label>Data</label>
            <input id='data' type='date'
              className='form-control'
              placeholder='Insira uma data'
              value={data}
              required />

            <label>Idioma</label>
            <input id='idioma' type='text'
              className='form-control'
              placeholder='Insira um idioma'
              value={idioma}
              required />
          </div>

          <div className='form-group col'>
            <label>Diretor</label>
            <input id='diretor' type='text'
              className='form-control'
              placeholder='Diretor'
              value={diretor}
              required />

            <label>Link</label>
            <input id='link' type='text'
              className='form-control'
              placeholder='Insira um link'
              value={link}
              required />

            <label>Avaliação</label>
            <input id='avaliacao' type='number'
              className='form-control'
              placeholder='Insira uma avaliacao'
              value={avaliacao}
              required />
          </div>

          <textarea id='sinopse' type='text'
            className='form-control'
            placeholder='Insira uma sinopse para o filme'
            value={sinopse}
            required />

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio"
              id="legendado" value={legendado} />
            <label class="form-check-label">Legendado</label>
            <input class="form-check-input" type="radio"
              id="nao_legendado" value={naolegendado} />
            <label class="form-check-label">Sem Legenda</label>
          </div>

        </form>
      </S.Card>
    </S.Container>
  )
}