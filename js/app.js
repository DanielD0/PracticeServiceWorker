
// if( 'serviceWorker' in navigator){
//     console.log('Podemos Usarlo');
// }
//Confirmar si podemos utilizar el service worker
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}

fetch('https://reqres.in/api/users')
    .then(resp => resp.text())
    .then(console.log)