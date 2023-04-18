// ==UserScript==
// @name        SM remove unnecessary stuff
// @include     https://en.strikermanager.com/inicio.php*
// @version 1.0
// @description YOLO
// ==/UserScript==

let pageLoaded = false;

const selectorsToRemove = [
    'a.boton_tienda.tien_it3',
    'a.boton_tienda.tien_it4',
    'a.boton_tienda.tien_it5',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(1)',
    '#cocina_platos > div > div.page > form > div:nth-child(2)',
    '#cocina_platos > div > div.page > form > div:nth-child(2)',
    '#cocina_platos > div > div.page > form > div:nth-child(3)',
]

async function perform() {
  pageLoaded = true;
  await waitFor(2);
  console.log(`Page url : ${window.location.href}`);

  let iframe = document.querySelector('iframe[name="marco"]');
  if(iframe) {
      console.log('frame found')

      for (let selectorToRemove of selectorsToRemove) {
          console.log(`trying to remove ${selectorToRemove}`)
          let elementToRemove = iframe.contentWindow.document.querySelector(selectorToRemove);
          if(elementToRemove && isVisible(elementToRemove)) {
              elementToRemove.remove();
          }
      }
  }
}

window.onload = perform;

async function waitFor(durationInSeconds) {
  console.log(new Date().toLocaleString());
  console.log(`Waiting for ${durationInSeconds} seconds`);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Wait over');
      resolve("anything");
    }, durationInSeconds*1000);
  });
}

function isVisible(e) {
  return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

async function handleError() {
  if(!pageLoaded) {
    console.log(`page load error occured`);
    // await waitFor(4);
    // window.location.reload();
  }
}

setTimeout(function(){
  handleError();
}, 30000);


window.onerror = handleError;
