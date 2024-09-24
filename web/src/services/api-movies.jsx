// login

const getMoviesFromApi = (params) => {

  console.log(params); 
  
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  const movies = 'movies';

  const genreQuery = params.genre ? `?genre=${params.genre}` : '';

  return fetch(`http://localhost:4000/${movies}${genreQuery}`)

    .then(response => response.json())
    .then(data => {
      return data;
   });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
