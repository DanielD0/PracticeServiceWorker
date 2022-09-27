
//self.addEventListener('fetch', event =>{
    // if(event.request.url.includes('.jpg')){
    //     console.log(event.request.url);
    //     let fotoReq = fetch('img/main.jpg')
    //     let fotoReq = fetch(event.request)
    //     let fotoReq = fetch(event.request) 
    //     event.respondWith(fotoReq);
    // }
    // if(event.request.url.includes('style.css')){


    //     let respuesta = new Response(`
    //         body {
    //             background-color: red !important;
    //             color:pink;
    //         }
    //     `,{
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //     });

    //     event.respondWith(respuesta);

    // }

    // if(event.request.url.includes('main.jpg')){
    //     let fotomostrar = fetch('img/main-patas-arriba.jpg')
    //     event.respondWith(fotomostrar)
    // }
    // let resp = fetch (event.request)
    // .then(resp => {
    //     if(resp.ok) return resp
    //     else return fetch('img/main.jpg');
    //     return resp.ok ? resp : fetch('img/main.jpg'); 
    // })
    // event.respondWith(resp);
//})
//Cuando el service worker se instala
self.addEventListener('install',event => {
    // Descargamos assets
    // Descargamos cache
    console.log('SW: Instalando SW!!!');

    const instalacion = new Promise ((resolve,reject) =>{
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            //Controla e instala una nueva version del service worker en nuestra app
            self.skipWaiting();
            resolve();
        },1)
    });
    
    event.waitUntil(instalacion);
});
//Cuando el SW toma el control de la aplicacion
self.addEventListener('activate',event => {
    //Borrar cache viejo
    console.log('SW2:Activo y listo para controlar la aplicacion');
})

self.addEventListener('fetch',event =>{
    //Aplicar estrategias del cache
    console.log('SW:', event.request.url);

    if(event.request.url.includes('https://reqres.in/api/users')){
        const resp = new Response(`'{ ok: false, mensaje: 'jajajaja' }`)
        event.respondWith(resp)
    }

})

