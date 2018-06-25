var React = require('react');
var LayoutContainer = require('./layout.jsx');

class Home extends React.Component {
  render() {

  	console.log(this.props.id);

  	let formAction = '/' + this.props.id + '/edit?_method=PUT'

    return (
    	<LayoutContainer>
	      <div className="container">
	        <h1>Edit Pokemon</h1>
		        <form method="POST" action={formAction}>
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
      </LayoutContainer>
    );
  }
}

module.exports = Home;