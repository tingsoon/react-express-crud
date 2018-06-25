var React = require('react');
var LayoutContainer = require('./layout.jsx');

class Home extends React.Component {
  render() {

  	let message = <h1>Welcome to Pokedex!!</h1>;

  	const allPokemonData = this.props.all_pokemon.map( function(pokemon) {
  		return (
  			
  			<div className="col-3">
	  			<div className="image">
	  				<img src={pokemon.img} />
	  			</div>
	  			<div className="text">
	  				<p>Name : {pokemon.name}</p>
	  				<p>Id : {pokemon.id}</p>
	  				<p>Num : {pokemon.num}</p>
	  				<p>Height : {pokemon.height}</p>
	  				<p>Weight : {pokemon.weight}</p>
	  			</div>
  			</div>
  			
  		)

  	});

    return (
    	<LayoutContainer>
	      <div>
	      	{message}
	      	<div className="container">
  			<div className="row">
	        	{allPokemonData}
	        </div>
  			</div>
	      </div>
	     </LayoutContainer>
    );
  }
}

module.exports = Home;