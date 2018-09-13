//import React from 'react'
//import ReactDOM from 'react-dom'
//"use strict"
//console.log("Hello World!");
//prototype for (paarital) revamp on John's RPG Encyclopedia site (http://www.darkshire.net/jhkim/rpg/encyclopedia/)


/*
class Encyclopedia extends React.component {
	constructor(props) {
		super(props);
		this.state = {
			displayCategory: '',
			displayList: [],
		};
		this.getListA = this.getListA.bind(this);
	}

	getListA() {
		return ["Abbeta: Fantasy Role-Playing Rules for the Twinflare Solar System", "Abenteuer in Magira"];
	}

	setDisplayToA() {
		this.setState((state) => ({
      		siplayCategory: 'A', 
      		displayList: this.getListA(),
      	}))
	}

	render() {
		return(
			<div> 
				<h1> RPG Encyclopedia Prototype </h1>
				<button onClick={setDisplayToA}> A </button>
				<h3>{this.state.displayCategory}</h3>
				<dl>
					this.state.displayList.map((item) => {
        				return <li> {item} </li>
        			})
				</dl>
			</div>
		)
	}
}
*/
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
