const fs = require('fs');
const { parse } = require('csv-parse');
//import * as dotenv from 'dotenv';

//postgres login stuff
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'pathfinder',
  password: 'root',
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
                spells(name,school,subschool,descriptor,spell_level,casting_time,range,area,effect,targets,duration,dismissible,shapeable,saving_throw,description,description_formatted,full_text,domain,short_description,mythic_text,mythic) 
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)`
               , [row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19], row[20]], (error, results) => {
            if(error) reject(error)

            resolve(`A new spell has been added`); //where does this go i wonder?
        })
    });
}
