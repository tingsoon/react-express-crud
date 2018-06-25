var React = require('react');

class Home extends React.Component {
  render() {

  	const pokemonId = this.props.id;
  	console.log(pokemonId);

    return (
     	<html>
	      	<body>
		      	<img src ={this.props.img} />
		      	<h1>{this.props.name}</h1>
		      	<ul>
		      	<li>Id : {this.props.id} </li>
		      	<li>Num : {this.props.num} </li>
		      	<li>Height : {this.props.height} </li>
		      	<li>Weight : {this.props.weight} </li>
		      	</ul>
		      	<form method="GET" action="/{this.props.id}/edit?_method=PUT">
		      	<button type="submit">UPDATE</button>
		      	</form>
		      	<form method="POST" action="/{this.props.id}/delete?_method=DELETE">
		      	<button type="submit">DELETE</button>
		      	</form>
	      	</body>
      	</html>
     
    );
  }
}

module.exports = Home;