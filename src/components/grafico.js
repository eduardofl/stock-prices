import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Grafico extends Component {
  render() {
    const data = this.props.dados_grafico;
    return(
      <div className="card-body">
        <LineChart width={600} height={400} data={data}>
          <Line type="monotone" dataKey="open" stroke="#8884d8" />
          <Line type="monotone" dataKey="close" stroke="#82ca9d" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"/>
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dados_grafico: state.acoes.grafico
  };
}

export default connect(mapStateToProps, null)(Grafico);
