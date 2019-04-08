import React, { Component } from 'react'

export default class Book extends Component {

  constructor(props){
    super(props);
      this.state = {
        cuenta: 0,
        mostrarInfo: false
      }
  }

  mostrarInfo = () =>{
    this.setState({
      mostrarInfo: !this.state.mostrarInfo,
    })
  }

  render() {
    const {img, titulo, autor, _id, desc, price} = this.props.info;
    const {borrarItem} = this.props;

    return (
      <div className="m-5">
      <h2>{`Titulo: ${titulo}`}</h2>
        <img src = {img} alt="Foto"/>
        <h6>{`Autor: ${autor}`}</h6>
        <button 
            className="btn btn-danger mr-3"
            onClick={() => borrarItem(_id)}>
          Borrar item
        </button> 
        <button className="btn btn-info" onClick={this.mostrarInfo}>Mostrar info</button>
        {this.state.mostrarInfo && <div> <p className="mt-3"> <h6>Precio: </h6> ${price}</p> <h6>Descripcion: </h6><p>{desc}</p></div>}
        </div>
    )
  }
}
