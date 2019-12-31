
import React, { Component } from 'react'
import { render } from 'react-dom'

const bookList = [
	{title: "Hunger", author: "Roxanne Gay", pages:320},
	{title: "The Sun Also Rises", author: "Ernest Hemingway", pages:260},
	{title: "White Teeth", author: "Zadie Smith", pages:480},
	{title: "Cat's Cradle", author: "Kurt Vonnegut", pages:304}
]

const Book = ({title, author, pages, freeBookmark}) => {
	return (
	  <section>
		<h2>{title}</h2>
		<p>by: {author}</p>
		<p>Pages: {pages} pages</p>
		<p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no'}</p>
	  </section>
	)
  }
  //function component
const Hiring = () => <div><p>The Library is hiring. Go to www.library.com/jobs for more.</p></div>

const NotHiring = () => <div><p>The Library is not hiring. Check back later for more info.</p></div>

//class component
class Library extends Component {
	state = {
		open: false,
		freeBookmark: false,
		hiring: false,
		data: [],
		loading: false
	}
	
	componentDidMount(){
		this.setState({loading: true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
		.then(data => data.json())
		.then(data => this.setState({data, loading: false}) )
	}

	componentDidUpdate() {
		console.log("The component just updated!")

	}

	toggleOpenClosed = () =>  {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}
    render() {
       
        const { books } = this.props
        return ( 
        <div>
			{this.state.hiring ? <Hiring /> : <NotHiring />}
			{this.state.loading
			? "loading..."
			: <div>
				{this.state.data.map(product => {
					return (
						<div key={product.id}>
							<h3>Product of the Week</h3>
					<h4>{product.name}</h4>
					<img src={product.image} height={100} alt={product.name}/>
				</div>
					)
				})}
				</div>
				}
            <h1>The library is {this.state.open ? 'open': 'closed'}</h1>
		<button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i)=> <Book 
                    key={i}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
					freeBookmark={this.state.freeBookmark}/>

                )}
        </div>
        )}
    
}
 

render(
	<Library books={bookList} />, 
	document.getElementById('root')
)