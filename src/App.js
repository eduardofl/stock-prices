import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/search_bar';
import FichaEmpresa from './components/ficha_empresa';
import Grafico from './components/grafico';

class App extends Component {
  render() {
      if(this.props.acoes.ultimo_preco) {
        return (
          <div className="App container">
            <div className="row">
              <SearchBar />
            </div>
            <div className="row">
              <div className="col">
                <div className="row card">
                  <div className="card-body">{`Último preço: ${this.props.acoes.ultimo_preco}`}</div>
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
              <div className="card-body">Procure algum valor como: "aapl", "fb" ou "twtr"</div>
            </div>
          </div>
        );
      }

  }
}

function mapStateToProps(state) {
  return {
    acoes: state.acoes
  };
}

export default connect(mapStateToProps, null)(App);
