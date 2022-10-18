//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1`;
const api_key = "live_S7y8UFk1mFSEPH1jUkZx0L3mVDx1VunSy5HjXa2RsDYU88rYlRxhH3qFv0LLb6ww"
const div_imagen= document.getElementById("img-elegida")
const fila = document.getElementById('carrousel-imagenes')
const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')
let imagesData;




//cargando data

fetch(url,{headers: {
      'x-api-key': api_key
    }})
.then((response) => {
  return response.json();
})
.then((data) => {
  imagesData = data
  let gridCell
  cargarFlechas()
  imagesData.map(function(imageData,index) {
    let image = document.createElement('img');
    let hov = document.createElement('a')
    hov.setAttribute("href","#img-elegida")
    gridCell = document.createElement('div')
    gridCell.classList.add('imagen')
    //use the url from the image object
     image.src = `${imageData.url}`
     hov.appendChild(image)
    gridCell.appendChild(hov)
     document.getElementById('grid').appendChild(gridCell)
    // seleccionarImagen(imageData.url)
    // llenarListas(imageData.breeds[0])
    if (index==0) {
      primeraImagen(image)
      llenarListas(buscarCualidades( `${imageData.url}`))
    }
    
    });

    imagenListener()
})
.catch(function(error) {
  console.log(error);
});

function imagenListener() {

  const imagen = document.querySelectorAll('.imagen');
  imagen.forEach((element) => {
 

 element.addEventListener('mouseenter', (e) => {
 
       const elemento = e.currentTarget;
 
       setTimeout(() => {
           imagen.forEach(element => element.classList.remove('hover'));
           elemento.classList.add('hover');
           
 
 
       }, 300);
 
   });

element.addEventListener('click', (e) => {
 
 seleccionarImagen(e.target.src)
   llenarListas(buscarCualidades(e.target.src))
})

 });
}
function cargarFlechas(){
  flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    
    if (fila.scrollLeft == 872){
      
    }
  });
  flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
  });
}



function primeraImagen(imagen) {
const miClon = imagen.cloneNode(true)
   div_imagen.appendChild(miClon)
  
}


function seleccionarImagen(imagen) {
  const div = document.getElementById('img-elegida')
  div.innerHTML = `
  <img src= ${imagen} alt="">
  `
}

function buscarCualidades(urlImagen) {
  let aux
  imagesData.forEach(element => {
    if (element.url == urlImagen) {
    //  console.log("raza "+ element.breeds[0].name)
     aux= element.breeds[0]
    }

  });
  return aux
}
function dibujaCualidades (num){
 let aux=""
 if(num>0){
 for (let index = 0; index < num; index++) {
   aux += `<img src="imagenes/inicio.ico" alt="">`
 }
}else{
  aux=  `<span>sin datos</span>`
}
 return aux
 }

function llenarListas(cualidades) {
  
  const lista = document.getElementById("id-ul")
  lista.innerHTML=`
  <li>Raza : ${dibujaCualidades (cualidades.name)} </li>
  <li>Inteligencia : ${dibujaCualidades (cualidades.intelligence)} </li>
  <li>Adaptibilidad :  ${dibujaCualidades (cualidades.adaptability)} </li>
  <li>Aseo : ${dibujaCualidades (cualidades.grooming)} </li>
  <li>Problemas de salud : ${dibujaCualidades (cualidades.healh_issues)} </li>
  <li>Nivel de afecto : ${dibujaCualidades (cualidades.affection_level)} </li>
  <li>Nivel de energia : ${dibujaCualidades (cualidades.energy_level)} </li>
  <li>Amistad con niños : ${dibujaCualidades (cualidades.child_friendly)} </li>
  <li>Amistad con perros : ${dibujaCualidades (cualidades.dog_friendly)} </li>
  <li>Amistad con extraños : ${dibujaCualidades (cualidades.extranger_friendly)} </li>
  <li>wikipedia : <a href="${cualidades.wikipedia_url}" target="_blank"> Ver en Wikipedia </a> </li>
  `
}


