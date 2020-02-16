const sq = require( 'sqlite3' ).verbose();

const tableName = 'games';
const databaseName = 'conway.db';

let db;

function createTable() {
  return new Promise(( resolve, reject ) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        world TEXT,
        guid TEXT)`,
      ( error) => {
        if ( error ) reject( error );
        else resolve();
      }
    );
  })
}

function checkTableExits( tableName ) {
  return new Promise(( resolve, reject ) => {
    db.get( 
      `SELECT * FROM sqlite_master WHERE type='table' AND name=$tableName`, 
      { $tableName: tableName }, 
      function( error, result ) {
        if ( error ) reject( error );
        else resolve( !!result );
      }
    );
  })
}

function getWorld( guid ) {
  return new Promise(( resolve, reject ) => {
    db.get( 
      `SELECT * FROM ${tableName} WHERE guid='${guid}'`, 
      [],
      function( error, result ) {
        if ( error ) reject( error );
        else resolve( result );
      }
    );
  })
}

function addWorld( guid, world ) {
  return new Promise(( resolve, reject ) => {
    db.run(
    `INSERT INTO ${tableName} (guid, world)
        VALUES ('${guid}', '${world}')`,
      [],
      function( error, result ) {
        if ( error ) reject( error );
        else resolve( this.lastID );
      })
  })
}

function close() {
  return new Promise(( resolve, reject ) => {
    db.close( error => {
      if ( error ) reject( error );
      else resolve();
    });
  });
}

function connect() {
  return new Promise(( resolve, reject ) => {
    const db = new sq.Database(
      databaseName, 
      error => {
        if( error ) reject( error );
        else resolve( db );
      }
    )
  });
}

async function initialize() {
  try {
    db = await connect();
    console.log( 'DB Connected!' );

    await createTable();
    return db;
  }
  catch( error ) {
    console.log( 'DB Error:', error.message || error );
    throw error;
  } 
}

function createRandomKey( key ) {
  // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  key = key || 'xxxxxxxxxxxxxx';
  return key.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0;
    let v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = {
  db,
  close,
  initialize,
  getWorld,
  addWorld,
  createKey: createRandomKey
};


// https://stackabuse.com/a-sqlite-tutorial-with-node-js/
