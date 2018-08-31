import { BUSCA_ACAO, ATUALIZA_DADOS, ATUALIZA_GRAFICO } from '../actions/index';

const initialState = {
  simbolo_acao: "",
  ultimo_preco: null,
  dados_empresa: {},
  grafico: {}
}

export default function(state = initialState, action){
  switch(action.type) {
    case BUSCA_ACAO:
      return Object.assign({}, state, {
        simbolo_acao: action.payload.data.symbol,
        ultimo_preco: action.payload.data.latestPrice
      });

    case ATUALIZA_DADOS:
      return Object.assign({}, state, {
        dados_empresa: action.payload.data
      });

    case ATUALIZA_GRAFICO:
    return Object.assign({}, state, {
      grafico: action.payload.data
    });

    default:
      return state;
  }
}
