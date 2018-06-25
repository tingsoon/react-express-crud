var React = require('react');

class Home extends React.Component {
  render() {

  	let message = <h1>Welcome to Pokedex!!</h1>;

  	const allPokemonData = this.props.all_pokemon.map( function(pokemon) {
  		return (
  			<li>
  				<p><img src={pokemon.img} /></p>
  				<p>Name : {pokemon.name}</p>
  				<p>Id : {pokemon.id}</p>
  				<p>Num : {pokemon.num}</p>
  				<p>Height : {pokemon.height}</p>
  				<p>Weight : {pokemon.weight}</p>
  			</li>
  		)

  	});

    return (
    	<html>
	    	<body>
		      <div>
		      	{message}
		        <ul> { allPokemonData} </ul>
		      </div>
	      	</body>
      	</html>
    );
  }
}

module.exports = Home;