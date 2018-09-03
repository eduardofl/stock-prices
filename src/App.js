import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/search_bar';
import FichaEmpresa from './components/ficha_empresa';
import Grafico from './components/grafico';
import UltimoPreco from './components/ultimo_preco';

class App extends Component {
  render() {
    if(this.props.valido) {
      return (
        <div className="App container">
          <div className="row">
            <SearchBar />
          </div>
          <div className="row">
            <div className="col">
              <div className="row card">
                <UltimoPreco />
              </div>
              <div className="row card">
                <Grafico />
              </div>
            </div>
            <div className="col card">
              <FichaEmpresa />
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="App container">
          <div className="row">
            <SearchBar />
          </div>
          <div className="row card">
            <UltimoPreco />
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    valido: state.acoes.valido
  };
}

export default connect(mapStateToProps, null)(App);
