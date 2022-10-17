//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=8&has_breeds=1`;
const api_key = "live_S7y8UFk1mFSEPH1jUkZx0L3mVDx1VunSy5HjXa2RsDYU88rYlRxhH3qFv0LLb6ww"
const div_imagen= document.getElementById("img-elegida")
const fila = document.getElementById('carrousel-imagenes')
const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')





//cargando data
fetch(url,{headers: {
      'x-api-key': api_key
    }})
.then((response) => {
  return response.json();
})
.then((data) => {
  let imagesData = data;
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
 console.log(e.target)
 seleccionarImagen(e.target.src)
 
})

 });
}
function cargarFlechas(){
  flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
  });
  flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
  });
}



function primeraImagen(imagen) {
const miClon = imagen.cloneNode(true)
 const miImagen = document.createElement("img")
   div_imagen.appendChild(miClon)
  
}


function seleccionarImagen(imagen) {
  const div = document.getElementById('img-elegida')
  div.innerHTML = `
  <img src= ${imagen} alt="">
  `
}

function llenarListas(cualidades) {
  const lista = document.getElementById("id-ul")
  lista.innerHTML=`
  <li>Raza : ${cualidades.name} </li>
  <li>Raza : ${cualidades.wikipedia_url} </li>
  <li>Inteligencia : ${cualidades.intelligence} </li>
  <li>Adaptibilidad : ${cualidades.adaptability} </li>
  <li>Aseo : ${cualidades.grooming} </li>
  <li>Problemas de salud : ${cualidades.healh_issues} </li>
  <li>Nivel de afecto : ${cualidades.affection_level} </li>
  <li>Nivel de energia : ${cualidades.energy_level} </li>
  <li>Amistad con niños : ${cualidades.child_friendly} </li>
  <li>Amistad con perros : ${cualidades.dog_friendly} </li>
  <li>Amistad con extraños : ${cualidades.extranger_friendly} </li>
  `
}