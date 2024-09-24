console.log('Holis');


const express = require('express'); // Importamos libreria express
const cors = require('cors');
const mysql = require('mysql2/promise');



// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Se ha iniciado el servidor en la direccion http://localhost:${serverPort}`);
});


async function getConnection () {
  try {

    const conn = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user:'root',
      password:'Tacirupeca84',
      database:'netflixpruebasale'
    })
  
  await conn.connect();
  
  return conn;
  
    }
    catch(error) {
      console.log(error);
        res.status(500).send('Se rompio');
    }
}



server.get('/movies', async (req, res) => {

 const conn = await getConnection();

  if (!conn) {
    res.status(500).send('Se rompio');
    return;
  }

  console.log(req.query);

  const genreFilterParam = req.query.genre;

  let query = 'SELECT * FROM movies';
  const queryParams = [];

  // Si existe el parámetro de género, filtramos por género
  if (genreFilterParam) {
    query += ' WHERE genre = ?'; // Agregamos el filtro por género
    queryParams.push(genreFilterParam); // Agregamos el valor del parámetro
  }

  
  
  const [results, columns] = await conn.query('SELECT * FROM movies;');

  // const results = array[0];

  // const [results, columns] = array;

  console.log(results);
  

  res.json({
    success: true,
    movies:  results
  });

  conn.close();
  

  
});


server.use(express.static('src/public-react'));

server.use(express.static('src/public-movies-images'));


