SELECT * FROM netflixpruebasale.movies;
SELECT title, genre
FROM movies 
WHERE year > 1990;

SELECT * 
FROM netflixpruebasale.movies
WHERE category = 'Top 10';

SELECT * FROM movies WHERE title = 'La vita è bella';
UPDATE movies
SET year = 1997
WHERE title = 'La vita è bella';

SELECT * FROM actors
WHERE birthday BETWEEN '1950-01-01' AND '1960-12-31';

SELECT name, lastname 
FROM actors
WHERE country = 'Estados Unidos';

SELECT * 
FROM users
WHERE plan_detailss = 'Standard';

SELECT * 
FROM users
WHERE name LIKE 'M%';