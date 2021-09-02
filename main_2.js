// Variables
var filter = 0;
let id_peliculas = 0;
const DOMitems = document.querySelector('#items1');
const DOMpaginas = document.querySelector('#pagina');
const DOMpag = document.querySelector('.pagination');
let num_pag = 1;
let num_pelis = 0;
let pag_list = 7;
let items_num = 2;
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
var jsonString = [];

// Pintamos los elementos del JSON
 function renderizarProductos(filter) {
    // Recorremos el JSON
    peliculas.forEach((info) => {

        // var obj = new Object();
        //     obj.id = info.id;
        //     obj.nombre  = info.nombre;
        //     obj.duracion  = info.duracion;
        //     obj.imagen  = "./img/fff.jpg";
        //     obj.genero = info.genero;
        //     obj.year = info.year;
        //     jsonString += JSON.stringify(obj);
        
        if((filter == info.genero)|| filter == "all"){
            console.log(num_pelis);
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
            if(num_pelis == pag_list) {
                num_pag += 1;
                g = document.createElement('div');
                g.setAttribute("id", "items"+items_num);
                g.setAttribute("class","row justify-content-between items d-none")
                DOMpaginas.appendChild(g);    
                pag_list += 7;
                items_num += 1;
                pag = document.createElement('li');
                pag.setAttribute("class", "page-item");
                pag.setAttribute("id", "num_pag"+num_pag);
                pag_link = document.createElement('a');
                pag_link.setAttribute("class", "page-link num_pag_"+num_pag);
                pag_link.setAttribute("href", "#");
                pag_link.setAttribute("onclick", "link_paginas(" + num_pag + ")");
                pag_link.innerHTML = num_pag;
                pag.appendChild(pag_link);
                DOMpag.appendChild(pag);

            }
            if (num_pelis < 7) {
                DOMitems.appendChild(miNodo);
            }
            else {
                g.appendChild(miNodo);
            }
            console.log("items"+ num_pelis);
        }
        
    });
    // Recorremos el JSON para sacar el número total de elementos
    peliculas.forEach((vector) => {id_peliculas= vector.id});

    // Pintamos el número de elementos seleccionados y el total
    document.getElementById("pelis_filtradas").innerHTML= num_pelis + " de " + id_peliculas;
    // console.log(jsonString);
    // console.log(peliculas);
}
renderizarProductos("all");

function link_paginas(num) {
    //TODO
    // Utilizando la variable num podremos acceder a la id de la página para hacerla visible e invisivilizar al resto
    // con el selector child o con un bucle contando los divs que hay dentro de Items.
    console.log("El parámetro es el: " + num);
    ca = document.getElementById("pagina").childElementCount;
    ca_num = document.getElementById("ca_num")

    for (let i = 1; i < ca+1; i++) {
        let pagina_num = document.querySelector('#items'+i);
        let pagina_li = document.querySelector('#num_pag'+i);
        pagina_li.classList.remove("disabled");
        pagina_num.classList.add("d-none");

        if ((pagina_num.className === 'd-none')||(num === i)) {
            pagina_num.classList.remove("d-none");
            pagina_li.classList.add("disabled");
        }
        console.log(pagina_num);
    }
   
}

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
