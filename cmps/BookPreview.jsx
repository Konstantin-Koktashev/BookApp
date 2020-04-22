import { bookServices } from '../services/bookServices.js';

export function BookPreview(props) {
  var x=bookServices.isBooksInStorage()
  const { book } = props;
  const {
    volumeInfo: { authors },
  } = book;
  return (
    <article className="book-preview" onClick={() => props.onSelectBook(book)}>
      <div className="book-thumbnail">
        {/* <h3> Author Name:{BookServices.getAuthorNames(book)}</h3> */}
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      </div>
      <div className="Book-author-price">
        <p>Authors: {authors}</p>
        <p>Price: </p>
      </div>
    </article>
  );
}
