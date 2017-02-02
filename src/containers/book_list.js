import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  // Create a list of books that we can make into list elements:
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state){
  // Whatever is returned here will show up as props in BookList:
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);