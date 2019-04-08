import React, { Component } from 'react'
import axios from 'axios';
import Book from './Book';
import booksDate from './Data';

class Booklist extends Component {
  constructor(props){
    super(props)

    this.state = {
      books: booksDate
    };
  }

  

  filtroDatos = (_id) => {
    const libros = this.state.books.filter(item => item._id !== _id);
    this.setState({
      books: libros
    });
  }

  render() {

    const {books, isLoaded} = this.state

 
      return (
        <div>
          <h2 className="text-center">Top 10 libros: </h2>
          {books.map( book  => (
          <Book key = {book.id} info = {book} 
          borrarItem ={this.filtroDatos}/>
            )
          )}
        </div>
      )

    }

  }


export default Booklist;
