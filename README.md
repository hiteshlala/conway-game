# Conway's Game of Life

> A zero player game exploring the evolution of cellular states based on surrounding cells.

> STATUS: Mostly done and partly abandoned...

> Deployed Version: [conway.hiteshlala.info]](http://conway.hiteshlala.info)

The game was devised by John Horton Conway in 1970.  Read more on [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)


## To setup
Make sure you have Node, NPM, and MongoDb installed
Make sure that MondoDb server is running on localhost:27017

    $ npm install
    $ npm run build
    $ npm run start

Import the example universes into the Db

    $ node addExamples.js

Navigate to http://localhost:3000

