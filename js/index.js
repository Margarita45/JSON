console.log('Conectado')

const div = document.querySelector('#Cont');
console.log(div);
// const btn = document.querySelector('#btn');
// console.log(btn);
// const form = document.querySelector('#form');
// console.log(form);




// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     ObtenerDatos();
//     mostrarBoton();
// })

async function ObtenerDatos() {

    const response = await fetch("familia.json");
    let json = await response.json();

    console.log(json);

    

    json.Familia.forEach(element => {

     

        div.innerHTML += '<div class="card__father"> <div class="card"> <div class="card__front" style="background-image: url('+element.url+');"> <div class="bg"></div> <div class="body__card_front"> <h1>'+element.Parentezco+'</h1> </div> </div> <div class="card__back"> <div class="body__card_back"> <h1>'+element.Nombres+'</h1>  <h2>' + element.Apellidos+ ' </h2> <br> <span> <br> <b>Edad:</b> ' + element.Edad+'<br> <b>Parentezco:</b> '+element.Parentezco+ '<br> <b>Informacion:</b> ' +element.Informacion+'</span> </div> </div> </div> </div> </div>'
    });

}

ObtenerDatos();
// function mostrarBoton() {
//     btn.style.display = 'none';
// }
