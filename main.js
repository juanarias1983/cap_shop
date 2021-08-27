// Variables
var filter = 0;
let id_peliculas = 0;
const DOMitems = document.querySelector('#items');
let num_pelis = 0
const peliculas = [
    {
        id: 1,
        nombre: 'Star Wars',
        duracion: 120,
        imagen: './img/star_wars.jpg',
        genero: 'cf',
        year: 1977
    },
    {
        id: 2,
        nombre: 'Rush',
        duracion: 100,
        imagen: './img/rush.jpg',
        genero: 'accion',
        year: 2013
    },
    {
        id: 3,
        nombre: 'Sunshine',
        duracion: 120,
        imagen: './img/sunshine.jpg',
        genero: 'cf',
        year: 2013
    },
    {
        id: 4,
        nombre: 'Los padres de ella',
        duracion: 90,
        imagen: './img/los_padres_de_ella.jpg',
        genero: 'comedia',
        year: 2000
    },
    {
        id: 5,
        nombre: 'Los padres de él',
        duracion: 110,
        imagen: './img/los_padres_de_el.jpg',
        genero: 'comedia',
        year: 2004
    },
    {
        id: 6,
        nombre: 'Saw',
        duracion: 90,
        imagen: './img/saw.jpg',
        genero: 'terror',
        year: 2004
    },
    {
        id: 7,
        nombre: 'Saw 2',
        duracion: 95,
        imagen: './img/saw_2.jpg',
        genero: 'terror',
        year: 2005
    },
    {
        id: 8,
        nombre: 'Robin Hood',
        duracion: 125,
        imagen: './img/Robin_Hood_pr_ncipe_de_los_ladrones-748168448-large.jpg',
        genero: 'aventuras',
        year: 1991
    },
    {
        id: 9,
        nombre: 'Casino Royale',
        duracion: 150,
        imagen: './img/casino_royale.jpg',
        genero: 'accion',
        year: 2006
    },
    {
        id: 10,
        nombre: 'Velocipastor',
        duracion: 80,
        imagen: './img/velocipastor.jpg',
        genero: 'terror',
        year: 2017
    }

];


// Pintamos los elementos del JSON
 function renderizarProductos(filter) {
    // Recorremos el JSON
    peliculas.forEach((info) => {
        
        if((filter == info.genero)|| filter == "all"){
            
            num_pelis += 1;
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-4', 'col-xs-12');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            if(info.imagen == "")
            {
                miNodoImagen.setAttribute('src', "./img/fff.jpg");
            }
            else {
                miNodoImagen.setAttribute('src', info.imagen);
            }
            
            // Duración
            const miNodoDuracion = document.createElement('p');
            miNodoDuracion.classList.add('card-text');
            miNodoDuracion.textContent = info.duracion + ' min';
            // Año 
            const miNodoYear = document.createElement('p');
            miNodoYear.classList.add('card-text');
            miNodoYear.textContent = "(" + info.year + ")";
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoDuracion);
            miNodoCardBody.appendChild(miNodoYear);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        }
        
    });
    // Recorremos el JSON para sacar el número total de elementos
    peliculas.forEach((vector) => {id_peliculas= vector.id});

    // Pintamos el número de elementos seleccionados y el total
    document.getElementById("pelis_filtradas").innerHTML= num_pelis + " de " + id_peliculas;
}
renderizarProductos("all");

// FUnción para filtrar elementos
function filter_check(){
    // Renicializamos la variable de películas mostradas
    num_pelis = 0
    DOMitems.innerHTML = '';
    if(document.querySelector('#accion').checked){
        renderizarProductos("accion");
    }
    if(document.querySelector('#cf').checked){
        renderizarProductos("cf");
    }
    if(document.querySelector('#comedia').checked){
        renderizarProductos("comedia");
    }
    if(document.querySelector('#terror').checked){
        renderizarProductos("terror");
    }
}

// Al añadir película, la imagen no va a ser la que se suba para no meter nada de back en la práctica
function add_pelicula(){
    
    peliculas.forEach((vector) => {id_peliculas= vector.id});
    peliculas.push({
        id: id_peliculas+1,
        nombre: document.getElementById("pelicula_titulo").value,
        duracion: document.getElementById("pelicula_duracion").value,
        imagen: './img/fff.jpg',
        genero: document.getElementById("pelicula_genero").value,
        year: document.getElementById("pelicula_year").value
    })
    document.getElementById("pelicula_titulo").value = '';
    document.getElementById("pelicula_duracion").value = '';
    document.getElementById("pelicula_genero").value = '';
    document.getElementById("pelicula_year").value = '';
    renderizarProductos("all");
}
