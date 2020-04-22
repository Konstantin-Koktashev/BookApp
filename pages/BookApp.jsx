import { BookFilter } from '../cmps/BookFilter.jsx';
import { bookServices } from '../services/bookServices.js';
import { BookList } from '../cmps/BookList.jsx';
import { BookDetails } from '../pages/BookDetails.jsx';



export class BookApp extends React.Component {
  state = {
    books: [],
    data: [],
    filterBy: null,
    selectedBook: null,
  };


  componentDidMount() {
    this.loadBooks();
  }

  getBooksList(books) {
    return books;
  }

  loadBooks = async () => {
    const books = await bookServices.query(this.state.filterBy);
    this.setState({ books });
  };
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => this.loadBooks());
  };
  onback = () => {};
  onDelete = () => {};
  onEdit = () => {};
  onClearSelected = () => {
    this.setState({ selectedBook: null });
  };

  onSelectBook = (selectedBook) => {
    this.setState({ selectedBook });
  };
  render() {
    const { books, filterBy, selectedBook } = this.state;

    return (
      <section className="filter-container">
        <BookFilter filterBy={filterBy} onSetFilter={this.onSetFilter} />
        {!selectedBook && (
          <BookList onSelectBook={this.onSelectBook} books={books}></BookList>
        )}
        {selectedBook && (
          <BookDetails
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            book={selectedBook}
            onBack={this.onClearSelected}
          ></BookDetails>
        )}
      </section>
    );
  }
}
