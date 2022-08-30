const listaCompras = ["Leche", "Huevo", "Arroz", "Frijoles", "Cereal"];
console.log(listaCompras);
listaCompras.push("Aceite de girasol");
console.log(listaCompras);
listaCompras.pop();
console.log(listaCompras);

const peliculasFav = [
  {
    nombre: "Pulp Fiction",
    director: "Quentin Tarantino",
    año: 1994,
  },
  {
    nombre: "The Dark Knight",
    director: "Christopher Nolan",
    año: 2008,
  },
  {
    nombre: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    año: 2013,
  },
];

const peliculasRecientes = peliculasFav.filter(({ año }) => año > 2010);
console.log(peliculasRecientes);

const directores = peliculasFav.map(({ director }) => director);
console.log(directores);

const titulosPeliculas = peliculasFav.map(({ nombre }) => nombre);
console.log(titulosPeliculas);

const directoresTitulos = directores.concat(titulosPeliculas);
console.log(directoresTitulos);

const directoresTitulos2 = [...directores, ...titulosPeliculas];
console.log(directoresTitulos2);
