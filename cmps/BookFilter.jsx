

export class BookFilter extends React.Component {
  state = {
    filter: {
      id: undefined,
      minPrice: 0,
      maxPrice: 0,
      author: '',
      price: '',
      title: '',
    }
  }
  handleChange = ({ target }) => {
    
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;

    this.setState(
      (prevState) => ({ filter: { ...prevState.filter, [field]: value } }),
      () => {
        this.props.onSetFilter(this.state.filter);
      }
    );
  };



  render() {
    const { author, price, title, id, minPrice, maxPrice } = this.state;
    return (
      <section>
        <h1>Find Your Book:</h1>
        <form onSubmit={this.onFilter}>
          <label htmlFor="">By Author</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          <label htmlFor="">By Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <label htmlFor="">By Id</label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={this.handleChange}
          />
          <label htmlFor="">By Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          <label htmlFor="">min price</label>
          <input
            type="number"
            name="minPrice"
            value={minPrice}
            onChange={this.handleChange}
          />
          <label htmlFor="">max price</label>
          <input
            type="number"
            name="maxPrice"
            value={maxPrice}
            onChange={this.handleChange}
          />
          <button>Filter</button>
        </form>
      </section>
    );
  }
}
