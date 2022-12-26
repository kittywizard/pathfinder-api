const fs = require('fs');
const { parse } = require('csv-parse');
import * as dotenv from 'dotenv';

//postgres login stuff
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DBUSER,
  host: 'localhost',
  database: 'pathfinder',
  password: process.env.DBPW,
  port: 5432,
});


//magic read stream thing
fs.createReadStream("./bash/spells_test.csv")
.pipe(parse({delimiter: ',', from_line: 2}))
.on("data", (row) => {
    createSpell(row);
})
.on('end', () => console.log('finished'))
.on('error', (error) => console.log(error.message))

//function that adds to database via query
//its magic don't ask me how it works
const createSpell = (row) => {
    return new Promise((resolve, reject) => {
        pool.query(`
                INSERT INTO 
                spells(name,school,subschool,descriptor) 
                VALUES($1, $2, $3, $4)`
               , [row[0], row[1], row[2], row[3]], (error, results) => {
            if(error) reject(error)

            resolve(`A new spell has been added`); //where does this go i wonder?
        })
    });
}
