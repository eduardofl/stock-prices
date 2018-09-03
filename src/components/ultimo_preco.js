import React, { Component } from 'react';
import { connect } from 'react-redux';

class UltimoPreco extends Component {
  render() {
    if(this.props.valido) {
      return (
        <div className="card-body">{`Último preço: ${this.props.ultimo_preco}`}</div>
      );
    } else if(this.props.valido === false) {
      return (
        <div className="card-body"><span className="text-danger">Símbolo não encontrado. Por favor, insira outro símbolo e tente novamente.</span></div>
      );
    } else {
      return (
        <div className="card-body">Procure algum símbolo de ação, como: "aapl", "fb" ou "twtr"</div>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    ultimo_preco: state.acoes.ultimo_preco,
    valido: state.acoes.valido
  };
}

export default connect(mapStateToProps, null)(UltimoPreco);
