const express = require('express');
const jsonfile = require('jsonfile');

const FILE = 'pokedex.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
const bodyParser = require('body-parser');


// Set up method-override for PUT and DELETE forms
var methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// creating engine for React
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */
  
jsonfile.readFile(FILE, (err, obj) => {

  // add pokemon
  app.get('/pokemon/new', (request, response) => {

    response.render('addPokemon');

  });


  app.post('/pokemon/new', (request, response) => {

    let input = request.body;
    input.id = parseInt(input.id);
    input.height += ' m';
    input.weight += ' kg';
    console.log(input)


    let pokemonData = obj.pokemon;
    pokemonData.push(input);


    jsonfile.writeFile(FILE, obj, (err) => {
      console.error(err);

      response.send("Pokemon Added!");

    });
  });

  // display pokemon
  app.get('/:id', (request, response) => {

    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = request.params.id;

    // find pokemon by id from the pokedex json file
    // (note: find() is a built-in method of JavaScript arrays)
    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {

      let pokemonName = pokemon.name;
      let pokemonId = parseInt(pokemon.id);
      let pokemonNum = pokemon.num;
      let pokemonImg = '<img src="' + pokemon.img + '">';
      let pokemonHeight = pokemon.height;
      let pokemonWeight = pokemon.weight;

      const context = pokemon;

      console.log(context);

      response.render('showPokemon', context);

      }
  });

  // edit pokemon
  app.get('/:id/edit', (request, response) => {

    let pokemonIndex = parseInt(request.params.id);
    // console.log(pokemonIndex);

    response.render('editPokemon', {id: pokemonIndex});
   
  });

  app.put('/:id/edit', (request, response) => {

    // console.log(request.params.id);
    // console.log(request.body);

    let poke = parseInt(request.params.id) - 1;

    let newValue = request.body;
    console.log(newValue);
    newValue.id = parseInt(newValue.id);
    newValue.height += ' m';
    newValue.weight += ' kg';
    obj.pokemon[poke] = newValue;

    response.send("Pokemon details updated.");

    // updating file
    jsonfile.writeFile(FILE, obj, (err) => {
      console.error(err);

      response.send(obj);

    });
  });

  // remove pokemon
  app.delete('/:id/delete', (request, response) => {

    console.log(request.params.id);

    let poke = parseInt(request.params.id) - 1;

    let removePokemon = obj.pokemon[poke]; 

    obj.pokemon.splice(poke, 1);

    response.send("Pokemon deleted.");

    // updating file
    jsonfile.writeFile(FILE, obj, (err) => {
      console.error(err);

      response.send(obj);  

    });  

  });

  // pokemon by name
  app.get('/pokemon/:pokemonName', (request, response) => {

    let inputId = request.params.pokemonName;
    inputId = inputId.toLowerCase();
    console.log(inputId);

    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.name.toLowerCase() === inputId;
    });

    if (pokemon === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {


      let pokemonName = pokemon.name;
      let pokemonId = parseInt(pokemon.id);
      let pokemonNum = pokemon.num;
      let pokemonImg = '<img src="' + pokemon.img + '">';
      let pokemonHeight = pokemon.height;
      let pokemonWeight = pokemon.weight;

      const context = pokemon;

      console.log(context);

      response.render('showPokemon', context);

    }

  });


  app.get('/', (request, response) => {

    let pokemon =  obj.pokemon;

    const data = {
        all_pokemon: pokemon
    }

    response.render('home', data);

  });

});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
