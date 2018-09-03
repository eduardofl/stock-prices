import axios from 'axios';

const URL_BASE = "https://api.iextrading.com/1.0/stock/";

export const BUSCA_ACAO = 'busca_acao';
export const ATUALIZA_DADOS = 'atualiza_dados';
export const ATUALIZA_GRAFICO = 'atualiza_grafico';
export const REQUEST_ERROR = 'request_error';

export function buscaAcao(simbolo) {
  const url = `${URL_BASE}${simbolo}/quote`;
  const request = axios.get(url);

  return {
    type: BUSCA_ACAO,
    payload: request
  };
}

export function atualizaDados(simbolo) {
  const url = `${URL_BASE}${simbolo}/company`;
  const request = axios.get(url);

  return {
    type: ATUALIZA_DADOS,
    payload: request
  };
}

export function atualizaGrafico(simbolo, tempo) {
  const url = `${URL_BASE}${simbolo}/chart`;
  const request = axios.get(url);

  return {
    type: ATUALIZA_GRAFICO,
    payload: request
  }
}
