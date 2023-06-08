// 1.- creamos una variable "url" donde hacemos referencia al origen de los datos
let url = 'https://jsonplaceholder.typicode.com/users/';
// 2.- realizamos una solicitud a "url"
fetch(url)
  // 3.- se realiza la promeza, al obtenerla la pasa a un determinado formato utilizando la funcion correspondiente. en este caso JSON
  .then(response => response.json())
  // 4.- leemos este objeto "data" y lo mostramos por consola, pero de forma posterior(fuera de pruebas), usamos el metodo "mostrarDatos"
  // .then(data => console.log(data))
  .then(data => mostrarDatos(data))
  //5.- sdi hay un error sera atrapado por la palabra clave "catch"
  .catch(error => console.log(error))

const mostrarDatos = (data) => {
  console.log(data)

  let body = ''
  for(let i = 0; i<data.length; i++){
    body+=  `<tr>
              <td>${data[i].id}</td>
              <td>${data[i].name}</td>
              <td>${data[i].email}</td>
            </tr>`
  }
  document.getElementById('data').innerHTML = body
}