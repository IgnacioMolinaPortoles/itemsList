import React, { Component } from 'react'
import axios from 'axios'

export default class BookInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            bookTitle: '',
            bookAutor: '',
            bookDesc: '',
            bookPrice: 0
        };

    }
  
    handleChange = event => {
        this.setState({})
    }

    handleSubmit = event => {
        event.preventDefault()

        const {title, autor, desc, price} = {
            title: this.state.bookTitle,
            autor: this.state.autor,
            desc: this.state.desc,
            price: this.state.price
        }

        axios.post(`http://localhost:1234/api/products`, {title, autor, desc, price})
        .then(res =>{
            console.log(res)
            console.log(res.data)
            
        })

    } 

    render() {
    return (
      <div>
          <form>
              <label>
                  Titulo del Libro:
                  <input type="text" name="titulo" onChange=/>
              </label>
          </form>
      </div>
    )
  }
}
