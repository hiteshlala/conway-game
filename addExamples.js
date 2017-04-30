'use strict';

let mongo = require('mongodb');
let fs = require( 'fs' );

let connectionString = "mongodb://127.0.0.1:27017/conway";
let collection = 'games';
let collectionrestore = 'games';
let datafile = 'backupdata.json';
let ids = [
  "57df5fff70f9b0536a377013", 
  "57df736d70f9b0536a377021", 
  "57df6e7570f9b0536a37701c",
  "57e3508d38d8642a289d544e",
  "57df67b270f9b0536a377017",
  "57df6b2f70f9b0536a37701b",
  "57df6f5970f9b0536a37701d",
  "57df711670f9b0536a37701f" 
];
let db;

let restore = process.argv[2];

let disconnect = () => {
  console.log(`\nDisconnecting DB\n`);
  db.close();
};

let backupdata = () => {
  let mids = ids.map( id =>{ return new mongo.ObjectID( id ); });
  db.collection( collection )
  .find( { _id: { $in: mids } }, ( error, data ) =>{
    if( error ) {
      console.log( 'error', error );
      disconnect();
    }
    else {
      data.toArray()
      .then( d => {
        fs.writeFileSync( datafile, JSON.stringify( d, null, 1) , 'utf8');
        console.log( d );
        disconnect();

      })
    }
  });
}

let restoredata = () => {
  let oldData = JSON.parse( fs.readFileSync( datafile, 'utf8') );
  oldData = oldData.map( item => {
    item._id = new mongo.ObjectID( item._id );
    return item;
  });
  console.log( oldData.length );
  console.log( oldData[0] );
  db.collection( collectionrestore )
  .insertMany( oldData )
  .then( r => {
    console.log( r );
    disconnect();
  })
  .catch( e => { 
    console.log( e );
    disconnect();
  })
}

mongo.MongoClient.connect(connectionString, ( err, database ) => {
    if (err) {
      console.error(`\nError connecting to MongoDb: ${err.message}`);
      return;
    }
    console.log(`\nDB connected`);
    db = database;
    restore ? backupdata() : restoredata();
});