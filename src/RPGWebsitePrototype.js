'use strict';
//prototype for (partial) revamp on John's RPG Encyclopedia site (http://www.darkshire.net/jhkim/rpg/encyclopedia/)


class Encyclopedia extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {};
  	}

  	render() {
    	return(
    		<div>
    			<h3>RPG Encyclopedia Prototype </h3> 
    			<button> test </button>
    		</div>
    	);
  	}
}


const domContainer = document.querySelector('#encyclopedia_container');
ReactDOM.render(<Encyclopedia />, domContainer);
