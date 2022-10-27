var perro = {
   
    accesorios: {
        titulo :"Accesorios",
        nombreClase: "accesorios",
        productos:  ["Correa",
            "Comederos y Bebederos",
            "Correas y paseo", "Bosales",
            "Collares",
            "Pretales"]},
    alimentos: {
        titulo:"Alimentos",
        nombreClase:"alimentos" ,
        productos: [
        "Eukanuba",
        "Fauna",
        "Juvenia",
        "Master Crock",
        "Nutrique",
        "Old Price",
        "Rey Can",
        "Royal Caning",
        "Purina Exelent"]},
        juguetes:{
            titulo: "Juguetes",
            nombreClase:"juguetes",
        productos :[
            "Otros","Pelotas","Mordillos","Peluches"]},

        cuchas_camas : {titulo:"Cuchas",
        nombreClase:"cuchas",
         productos:["Camas","Colchonetas","Moises","Mantas"]}
        
}


let botones= document.querySelectorAll(".grid-animales a")

botones.forEach( (element) => {
    
    element.addEventListener('click',(e)=>{
        
       let animal
       key=e.target.alt
        switch (key) {
            case "Perros": 
            animal= perro
                break;
                case "Gatos": 
                animal= gato
                    break;
                    case "Aves": 
                    animal= aves
                        break;
                        case "Roedores": 
                        animal= roedores
                            break;
        
            default:
                break;
        }
        ponerTitulo(key)
for (const key in animal) {
    
        mostrarArticulos(animal[key])
    }
    })
})

ponerTitulo("Perros")

for (const key in perro) {
      mostrarArticulos(perro[key])
      
    }



function ponerTitulo(titulo) {
    let nombreAnimal= document.querySelector('.titulo-productos h3')
nombreAnimal.textContent= titulo
}


    
function mostrarArticulos(animal) {
    
    let h3 =document.querySelector(`.${animal.nombreClase} h3`)
    let ol= document.querySelector(`.${animal.nombreClase} ol`)
    let pro= document.querySelector(`.${animal.nombreClase}`)
   
    
         
        if (ol!=null) {
            ol.remove()
        }
        
   

    h3.textContent= animal.titulo
    
    let olAux = document.createElement('ol')
    for (const key in animal.productos) {     
     let list =document.createElement("li")
    list.textContent = animal.productos[key]
    olAux.appendChild(list)
  }
  pro.appendChild(olAux)
  
}






var gato = {

   
    accesorios: {
        nombreClase: "accesorios",
        titulo:"Accesorios",
        productos:  [
           "Camas",
           "Transportadoras",
           "Collares",
           "Comederos y Bebederos"]},
    alimentos: {
        nombreClase:"alimentos" ,
        titulo:"alimentos",
        productos: [
            "Secos",
            "Húmedos",
           " Medicados",
           " Necesidades Especiales",
           " Naturales",
           " Snacks"]},
    juguetes:{
        nombreClase:"juguetes",
        titulo:"Juguetes",
        productos :[
            "Otros","Rascadores","Comportamiento"
        ]},

        cuchas_camas : {
        nombreClase:"cuchas",
        titulo:" Estética e Higiene",
        productos:[
               
            "Literas y palitas",
            "Lociones y Colonias",
            "Piedras y Arena",
            "Shampoo y Acondicionador"]}
        
}

var aves = {
   
    accesorios: {
        titulo :"Accesorios",
        nombreClase: "accesorios",
        productos:  [
       "Comederos y Bebederos",
        "Jaulas y Nidos",
        "Juguetes"]},
    alimentos: {
        titulo:"Semillas yAlimentos",
        nombreClase:"alimentos" ,
        productos: [
            "Alpiste",
            "Mijo",
            "Girasol",
            "Lino",
            "Amapola",
            "Avena"
        ]},
        juguetes:{
            titulo: "Medicamentos",
            nombreClase:"juguetes",
        productos :[
            "Suplementos","Fármacos" , "Vitaminas" ]},
}
var roedores = {
   
    accesorios: {
        titulo :"Higiene",
        nombreClase: "accesorios",
        productos:  [
       "Absorbente Sanitario",
        "Cepillos",
        "Baños de arena"]},
    alimentos: {
        titulo:"Semillas yAlimentos",
        nombreClase:"alimentos" ,
        productos: [
            "Heno en Rama Puppis",
            "Alfalfa En Cubos",
            "Alfalfa en rama",
            "Alimento para conejo",
            
        ]},
        juguetes:{
            titulo: "Juguetes",
            nombreClase:"juguetes",
        productos :[
            "Bebederos","Zanahorias" , "Madrigueras" ]},  
            cuchas_camas : {titulo:"Habitats",
        nombreClase:"cuchas",
         productos:["Tunel circular","Hamstera","Jaulas","Camas"]}    
}

