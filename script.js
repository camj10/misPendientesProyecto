const principal = document.getElementById("principal");
const principalfecha = document.getElementById("principalfecha");
const btn_form= document.getElementById('form');
const actividad=document.getElementById('label-name');
const fecha=document.getElementById('label-fecha');
const hora=document.getElementById('label-hora');
let contador=0;

const SHEET_ID = "1q1yrkFbdQnxennkYqLt2exjcESIPP-Yz-bgCu6_2zyc";

const ACCESS_TOKEN ="ya29.a0AeTM1ifWGuIyRFp9Y2JnVYgnPq1BJGpA0dBVhpXzIsitYsCtI5MDHhIIIJhqLLbmUzuk59XoIlJo-ayMW5i9YmLmDuN2xd1z5qpAfnFSyKEt9nwT9mxOp_xrDm_R9ZsHxkRMvuVXeFqdBdX-8GWwg4jaygqaaCgYKAbcSARISFQHWtWOmqfbql5EdfEng7aIxriDaRQ0163";

fetch(
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Datos!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
).then(function (response) {
    response.json().then(function (data) {
    const values = data.values;
    const lista = document.getElementById("datos-ul");

        const producto = document.createElement("div");
        producto.className =  "datos-item";

        // Nombre 
        const itemProducto = document.createElement("li");
        itemProducto.innerHTML = 'Nombre: '+values[1][0]; 

        // carrera
        const itemDescriccion = document.createElement("li");
        itemDescriccion.innerHTML = 'Carrera: '+values[1][1]; 

        // año
        const itemPrecio = document.createElement("li");
        itemPrecio.innerHTML = 'Año: '+values[1][2]; 

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemDescriccion);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    });
});



document.getElementById('Btn').addEventListener('click',()=>{
       btn_form.style.display='flex';
})


document.getElementById('Btn-confir').addEventListener('click',()=>{
    if (actividad.value !== '' && fecha.value !== ''  && hora.value!== ''){
        let p=document.createElement('li');
        let pr=document.createElement('li');
        pr.innerHTML='<li id=C'+contador+'>'+hora.value+' Hs del '+fecha.value+'</li>';
        p.innerHTML='<li onclick=color('+contador+') id=c'+contador+'>'+actividad.value+'</li>';
        contador
        principal.appendChild(p);
        principalfecha.appendChild(pr);
        actividad.value=''; fecha.value='';hora.value= '';
        document.getElementById('from_line').innerHTML='';btn_form.style.display='none';
    }else{
        actividad.value=''; fecha.value='';hora.value= '';
        document.getElementById('from_line').innerHTML='Error informacion insuficiente';
    }
    contador++;

})
function color(id){
    let d=document.getElementById('c'+id);
    let de=document.getElementById('C'+id);
    if(d.style.textDecoration=='line-through'){
        d.style.textDecoration='none';
        de.style.textDecoration='none';
    }else{d.style.textDecoration='line-through';
    de.style.textDecoration='line-through';}
    console.log(d.style.textDecoration);
}
