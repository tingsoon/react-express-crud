var React = require('react');

class Home extends React.Component {
  render() {
    return (

      <div>
		 <h1>Add Pokemon</h1>
			<form method="POST" action="/pokemon/new" >
			  <p>Pokemon Id: </p>
			  <input type="number" name="id" min="152"/>
			  
			  <p>Pokemon Number: </p>
			  <input type="text" name="num"/>
			  
			  <p>Pokemon Name: </p>
			  <input type="text" name="name"/>
			  
			  <p>Pokemon Height: </p>
			  <input type="text" name="height"/> m
			  
			  <p>Pokemon Weight: </p>
			  <input type="text" name="weight"/> kg
			  <p></p>
			  <input type="submit" value="Submit"/>
			</form>
      </div>

    );
  }
}

module.exports = Home;