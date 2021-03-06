# Pokedex Express App with React-Express Templating

We will build the Pokedex web app using Node.js, Express, using React as our templating engine.

For this exercise, we will set up our server to accept POST requests to save user-provided data and serve a form to the user for them to send data to our server to create a new pokemon.

The starter code in this repository builds upon the previous exercise's ([pokedex-express](https://github.com/wdi-sg/pokedex-express)).

## Getting Started

1.  Fork and clone this repository to your computer
2.  Run `npm install` to install dependencies
3.  Look in the starter file called `index.js`, run `nodemon` to start local server on port 3000
4.  Open `localhost:3000` on your browser and see the home page

## Deliverables

* Expose a new endpoint that intercepts GET requests to `/pokemon/new`, which responds with a view containing a `form` that has these fields: `id`, `num`, `name`, `img`, `height`, and `weight`

* Point the form to submit data to the (`/pokemon`) route using POST method

* (for the `id` and `num` fields, for now, the user will simply choose a number. Obviously if they happen to pick an id that already exists, they will have a bad time. We will have the tools to correct this soon)

* Expose a new endpoint that accepts POST requests to `/pokemon`, which parses the form data and saves the new pokemon data into `pokedex.json`

* Create a `views` folder and place your `.jsx` views in it. Your app should render views from this folder.

## Further

* create the ability to edit and delete pokemon from the json file

* Add a "Sort by name" button to the homepage (`/` route) that when clicked, sends a GET request with a query parameter specifying "?sortby=name"
  * Try to implement the button as an element within a `form` tag with `action="/"` and `method="GET"` - so you don't have to write an AJAX request in JavaScript

* Modify your GET `/` logic to handle the new query parameter, returning a view with all the pokemon sorted by their names (whereas previously it was sorted by ID)

* Instead of saving `id` and `num` as random values input by the user via the form, implement the logic that guarantees the uniqueness of `id` and `num` of every newly created pokemon
  * eg. if last pokemon in the `pokedex.json` has `"id": 151` and `"num": "151"`, the new pokemon object could have `"id": 152` and `"num": "152"`
  * Hint: You might consider adding a new key value pair in `pokedex.json`, like `"lastKey": 151`
  * are there any other ways to make a unique id for something? Remember that it is technically possible for 2 requests to be made to your server at almost the exact same time.

