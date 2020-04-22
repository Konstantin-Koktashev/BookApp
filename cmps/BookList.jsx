import {BookPreview} from '../cmps/BookPreview.jsx'
export  function BookList(props) {
    return (
        <div className="book-list">
        {props.books && props.books.map(book => <BookPreview onSelectBook={ props.onSelectBook } key={ book.id }  book={book} />) }}
          
        </div>
    )
}

// onSelectCar={ props.onSelectCar } key={ car.id } car={ car }