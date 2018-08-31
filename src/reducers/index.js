import { combineReducers } from 'redux';
import ReducerEmpresas from './reducer_empresas';

const rootReducer = combineReducers({
  acoes: ReducerEmpresas
});

export default rootReducer;
