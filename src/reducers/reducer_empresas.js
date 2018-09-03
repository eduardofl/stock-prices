import { BUSCA_ACAO, ATUALIZA_DADOS, ATUALIZA_GRAFICO, REQUEST_ERROR } from '../actions/index';

const initialState = {
  simbolo_acao: "",
  ultimo_preco: null,
  dados_empresa: {},
  grafico: {},
  valido: null
}

export default function(state = initialState, action){
  if (action.error) {
    action.type = REQUEST_ERROR;
  }
  
  switch(action.type) {
    case BUSCA_ACAO:
      return Object.assign({}, state, {
        simbolo_acao: action.payload.data.symbol,
        ultimo_preco: action.payload.data.latestPrice,
        valido: true
      });

    case ATUALIZA_DADOS:
      return Object.assign({}, state, {
        dados_empresa: action.payload.data,
        valido: true
      });

    case ATUALIZA_GRAFICO:
    return Object.assign({}, state, {
      grafico: action.payload.data,
      valido: true
    });

    case REQUEST_ERROR:
    return Object.assign({}, state, {
      valido: false
    });

    default:
      return state;
  }
}
