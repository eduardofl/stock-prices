import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class FichaEmpresa extends Component {
  render() {
    if(_.isEmpty(this.props.dados_empresa)){
      return(
        <div></div>
      );
    } else {
      return (
          <div className="card-body">
            <h5 className="card-title">Dados da empresa</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Nome: {this.props.dados_empresa.companyName}</li>
              <li className="list-group-item">CEO: {this.props.dados_empresa.CEO}</li>
              <li className="list-group-item">Setor: {this.props.dados_empresa.sector}</li>
              <li className="list-group-item">Descrição: {this.props.dados_empresa.description}</li>
            </ul>
          </div>        
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    dados_empresa: state.acoes.dados_empresa
  };
}

export default connect(mapStateToProps, null)(FichaEmpresa);
