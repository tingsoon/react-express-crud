var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Edit Pokemon</h1>
	        <form method="POST" action="/' + pokemonIndex + '/edit?_method=PUT" >
	        <p>Id: </p>
	        <input type="number" name="id" />
	        <p>Num: </p>
	        <input type="number" name="num" />
	        <p>Name: </p>
	        <input type="text" name="name" />
	        <p>Height: </p>
	        <input type="text" name="height" />
	        <p>Weight: </p>
	        <input type="text" name="weight" />
	        <p></p>
	        <input type="submit" value="Submit" />
	        </form>
      </div>
    );
  }
}

module.exports = Home;