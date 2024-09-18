// login

const getMoviesFromApi = () => {
  
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  const movies = 'movies';

  return fetch(`http://localhost:4000/${movies}`)

    .then(response => response.json())
    .then(data => {
      return data;
   });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
