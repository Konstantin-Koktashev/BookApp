import { storageServices } from '../services/storageService.jsx';
import { getBooks } from './getBooks.js';


var gBooks;
export const bookServices = {
  query,
  saveOnRecive,
  getAuthorNames,
  isBooksInStorage,
  getAllBooks,
};

function getAuthorNames(book) {
  const {
    volumeInfo: { authors },
  } = book;
  return authors.join(',');
}

async function query(filterBy) {
  const books = await getBooks();
  if (books) saveOnRecive(books.items);
  gBooks = books.items;
  if (!books) gBooks = storageService.load('books');


  if (!filterBy || !filterBy.author) return gBooks;
  const { author, maxPrice, minPrice } = filterBy;



  var res = gBooks.filter(
    (book) =>
      book.volumeInfo.authors &&
      book.volumeInfo.authors.some((authorNames) => authorNames.toLowerCase().includes(author.toLowerCase()))
  );

  return res;
}

function saveOnRecive(books) {
  storageServices.store('books', books);
}
function isBooksInStorage() {
  return !(!gBooks === true);
}

function getAllBooks() {
  return gBooks;
}
