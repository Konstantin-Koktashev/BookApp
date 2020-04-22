import { bookServices } from '../services/bookServices.js';



export  class BookDetails extends React.Component {
    
    
    render() {
        console.log("BookDetails -> render -> this.props", this.props)
        const { book, onBack ,onEdit,onDelete} = this.props
        
        return (
            <div>
                <h1>{book.volumeInfo.title}</h1>
                    <h4>By :{bookServices.getAuthorNames(book)}</h4>
                    <p className="summary">Summary:
                    {book.searchInfo.textSnippet}</p>
                    <p className="full-description">{book.volumeInfo.description}</p>
                    
            </div>
        )
    }
















/* <button onClick={ onBack }>Back</button>
                <h2>Welcome to the { car.vendor } page!</h2>
                <img src={ `https://robohash.org/${car.vendor}` } alt="" />
                <p>Price - { car.price }</p>
                <p>Id - { car.id }</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aut dolorum culpa impedit et perferendis expedita repudiandae ex quam quas quod possimus, dignissimos tempore autem officia voluptatibus accusamus corrupti alias!</p>
                <button onClick={ () => this.props.onEdit(car.id) }>Edit</button>
                <button onClick={ () => this.props.onDelete(car.id) }>Delete</button> */}