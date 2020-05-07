'use strict';

const main = document.querySelector('.js-main');
const addCard = document.querySelector('.js-add-card');
function getCardStructure() {
  console.log('estoy dentro');
  main.innerHTML = '';
  let htmlCode;
  htmlCode = `<div class="app-list">`;
  htmlCode += `<div class="p-1 rounded-sm bg-primary shadow">`;
  htmlCode += `<form class="app-list-form align-middle p-1 position-relative">`;
  htmlCode += `<input class="app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" value="@@title" title="Editar el título de la lista" />`;
  htmlCode += `<div class="app-list-options">`;
  htmlCode += `<span class="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>`;
  htmlCode += `<div class="app-list-btns btn-group btn-group-sm">`;
  htmlCode += `<button type="button" class="js-delete-1 btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">`;
  htmlCode += `<span class="fas fa-trash-alt"></span>`;
  htmlCode += `</button>`;
  htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-left" title="Mover esta lista hacia la izquierda">`;
  htmlCode += `<span class="fas fa-arrow-left"></span>`;
  htmlCode += ` </button>`;
  htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-right" title="Mover esta lista htmlCode += hacia la derecha">`;
  htmlCode += `<span class="fas fa-arrow-right"></span>`;
  htmlCode += `</button>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</form>`;
  htmlCode += `<article class="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta"><div><span class="badge badge-secondary bg-success">JS</span><span class="badge badge-secondary bg-success">Css</span><span class="badge badge-secondary bg-success">Html</span></div><div><h3 class="h6">@@title</h3></div><div class="text-black-50"><small class="pr-2 fas fa-align-left"></small> <small class="far fa-check-square"></small><small title="Subtareas completadas: 3 de 5">3/5</small></div><div class="app-card-btns btn-group-vertical btn-group-sm"><button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo"><span class="fas fa-arrow-up"></span></button><button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia arriba"><span class="fas fa-arrow-down"></span></button></div></article>`;
  htmlCode += `<button type="button" class="ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta">`;
  htmlCode += `<span class="fas fa-plus"></span>   Añadir otra tarjeta  </button>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  return (main.innerHTML = htmlCode);
}

addCard.addEventListener('click', getCardStructure);
