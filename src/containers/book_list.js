import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  // Create a list of books that we can make into list elements:
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={(event) => this.props.selectBook(book)}
          >
          {book.title}
        </li>
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
// anything returned here will end up as props in BookList:
function mapDispatchToProps(dispatch){
  // When selectBook action is given to 'bindActionCreators', dispatch 'spits' the actions to the reducers 
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//This creates a Container for BookList with 'mapStateToProps' and 'mapDispatchToProps' as props. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);