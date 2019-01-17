import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import Row from 'react-bootstrap/lib/Row'
import './index.css';
import $ from 'jquery'

class Header extends React.Component{
	render(){
		return (
			
		<div className="intro-title">
			<h1 className="title">What is Chelsey Reading?</h1>
			<h2 className="intro">Check out this Bibliophile's books!</h2>
			
			<div className="information-boxes">
				{/* box#1 */}
				<h3>Currently Reading|</h3>
				{/* box#2 */}
				<h3>Reading next|</h3>
				{/* box#3 */}
				<h3>Already Read</h3>			
			</div>
		</div>
		);
	}
}

//adding api data
//ajax call inside componentDidMount
//then update state
export default class GoogleStuff extends React.Component{
	constructor(props){
		super(props);

		this.state = {books: []};
	}
	
	componentDidMount() {
		this.BookList();
		
	}

	 BookList() {
	 	$.getJSON('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
	 	.then(({ results }) => this.setState ({ books: results}))
	 }

	render() {
		const Books = this.state.books.map((item, i) => (
			<div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.publisher }</span>
      </div>
		));

		return (
			<div id="layout-content" className="layout-content-wrapper">
			<div className="panel-list">{ Books }</div>
		</div>
		);
	}


} //closing bracket



  

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

ReactDOM.render(
   <Header />,
   document.getElementById('root')
 );
