import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buscaAcao, atualizaDados, atualizaGrafico } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { simbolo_acao: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ simbolo_acao: event.target.value });
  }

  realizarBusca(simbolo_acao) {
    if(simbolo_acao !== '') {
      this.props.buscaAcao(simbolo_acao);
      this.props.atualizaDados(simbolo_acao);
      this.props.atualizaGrafico(simbolo_acao);
    }
  }

  render() {
    return (
      <div className="input-group" >
        <input
          placeholder="Digite o símbolo da ação"
          className="form-control"
          type="text"
          onChange={this.handleChange}
          value={this.state.simbolo_acao}
        />
        <button onClick={() => this.realizarBusca(this.state.simbolo_acao)} className="btn btn-primary input-group-append">Procurar</button>
      </div>
    );
  }
}

export default connect(null, { buscaAcao, atualizaDados, atualizaGrafico })(SearchBar);
