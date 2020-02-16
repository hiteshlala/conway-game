const express = require('express');
const bodyParser = require('body-parser');
const path = require( 'path' );

const db = require( './db.js' );

const port = 3000;
const staticAssets = path.resolve( __dirname, '../frontend/dist/frontend' );


function createApp() {
  return new Promise(( resolve, rejct ) => {
  
    const app = express();
    
    app.use( express.static( staticAssets ) );
    app.use( bodyParser.json() );
    
    app.post('/api/game', async (req, res) => {
      try {
        console.log( 'Save New Game' );
        const world = req.body.world;
        const guid = db.createKey();
        await db.addWorld( guid, world );
        const newEntry = await db.getWorld( guid );
        console.log( '     New Game:', newEntry.guid );
        res.send({ gameId: newEntry.guid, world: newEntry.world });
      }
      catch( error ) {
        res.send({ error: 'Unable To Add Game' });
        console.error( error );
      }
    });
    
    app.get('/api/game/:gameId', async ( req, res ) => {
      try {
        const guid = req.params.gameId;
        console.log( 'Get Game:', guid );
        const game = await db.getWorld( guid );
        if ( game ) res.send({ gameId: game.guid, world: game.world });
        else res.send({ error: 'Game Not Found' });
      }
      catch( error ) {
        res.send({ error: 'Game Not Found' });
        console.error( error );
      }
    });
    
    // catchalls
    app.get( '/game/:id', ( req, res ) => {
      const guid = req.params.id;
      console.log( 'Redirect Game:', guid )
      res.redirect( `/?game=${guid}` );
    });
    app.get( '*', ( req, res ) => {
      console.log( 'Redirect Index' );
      res.redirect( '/' );
    });

    resolve( app );
  })
}


async function start() {
  
  await db.initialize();

  const app = await createApp();

  app.listen( port, function() {
    console.log(`App is listening on port ${port}...`);
  });
}

start()
.catch( console.log );
