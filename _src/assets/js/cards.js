'use strict';

const addCard = document.querySelector('.js-add-card');

function getCardStructure() {
  const main = document.querySelector('.js-main');
  const divAppList = document.createElement('div');
  divAppList.setAttribute('class', 'app-list');

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'p-1 rounded-sm bg-primary shadow');

  const formContainer = document.createElement('form');
  formContainer.setAttribute('class', 'app-list-form align-middle p-1 position-relative');

  const formInput = document.createElement('input');
  formInput.setAttribute('class', 'app-list-input form-control form-control-sm');
  formInput.setAttribute('placeholder', 'Tareas importantes');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('value', 'Título futuro');
  formInput.setAttribute('title', 'Editar el título de la lista');

  const divOptions = document.createElement('div');
  divOptions.setAttribute('class', 'app-list-options');

  const SpanDots = document.createElement('span');
  SpanDots.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');

  const divBtnOptions = document.createElement('div');
  divBtnOptions.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

  const BtnDelete = document.createElement('button');
  BtnDelete.setAttribute('type', 'button');
  BtnDelete.setAttribute('class', 'js-delete-1 btn btn-light text-muted border shadow-sm');
  BtnDelete.setAttribute('title', 'Borrar esta tarjeta');
  const SpanDelete = document.createElement('span');
  SpanDelete.setAttribute('class', 'fas fa-trash-alt');

  const BtnLeft = document.createElement('button');
  BtnLeft.setAttribute('type', 'button');
  BtnLeft.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-left');
  BtnLeft.setAttribute('title', 'Mover esta lista hacia la izquierda');
  const SpanLeft = document.createElement('span');
  SpanLeft.setAttribute('class', 'fas fa-arrow-left');

  const BtnRight = document.createElement('button');
  BtnRight.setAttribute('type', 'button');
  BtnRight.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-right');
  BtnRight.setAttribute('title', 'Mover esta lista hacia la derecha');
  const SpanRight = document.createElement('span');
  SpanRight.setAttribute('class', 'fas fa-arrow-right');

  const CardArticle = document.createElement('article');
  // CardArticle.addEventListener('click', toggleEdit);
  CardArticle.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
  CardArticle.setAttribute('title', 'Abrir la tarjeta');

  // Esto se tiene que hacer con bucle para que pinte todas las tag
  const divTag = document.createElement('div');
  const SpanTag = document.createElement('span');
  SpanTag.setAttribute('class', 'badge badge-secondary bg-success');
  const SpanText = document.createTextNode('JS');

  const divArticleTitle = document.createElement('div');
  const articleTitle = document.createElement('h3');
  const articleTitleText = document.createTextNode('Titulo');
  articleTitle.setAttribute('class', 'h6');

  const divProgress = document.createElement('div');
  const smallIcon = document.createElement('small');
  smallIcon.setAttribute('class', 'pr-2 fas fa-align-left');
  const smallIconCheck = document.createElement('small');
  smallIconCheck.setAttribute('class', 'far fa-check-square');
  const smallTextProgress = document.createElement('small');
  smallTextProgress.setAttribute('title', 'Subtareas completadas: 3 de 5');
  const smallText = document.createTextNode(' 3/5');

  const divArrows = document.createElement('div');
  divArrows.setAttribute('class', 'app-card-btns btn-group-vertical btn-group-sm');
  const btnArrowUp = document.createElement('button');
  btnArrowUp.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-card-move-up');
  btnArrowUp.setAttribute('type', 'button');
  btnArrowUp.setAttribute('title', 'Mover hacia arriba');
  const iconBtnUp = document.createElement('span');
  iconBtnUp.setAttribute('class', 'fas fa-arrow-up');
  const btnArrowDown = document.createElement('button');
  btnArrowDown.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-card-move-down');
  btnArrowDown.setAttribute('type', 'button');
  btnArrowDown.setAttribute('title', 'Mover hacia abajo');
  const iconBtnDown = document.createElement('span');
  iconBtnDown.setAttribute('class', 'fas fa-arrow-down');

  const btnAddCard = document.createElement('button');
  btnAddCard.setAttribute('class', 'ml-1 btn btn-primary btn-sm text-white-50');
  btnAddCard.setAttribute('type', 'button');
  btnAddCard.setAttribute('title', 'Añadir una nueva tarjeta');
  const iconAddCard = document.createElement('span');
  iconAddCard.setAttribute('class', 'fas fa-plus');
  const addCardText = document.createTextNode(' Añadir otra tarjeta');

  main.appendChild(divAppList);
  divAppList.appendChild(divContainer);
  divContainer.appendChild(formContainer);
  divContainer.appendChild(CardArticle);
  divContainer.appendChild(btnAddCard);
  formContainer.appendChild(formInput);
  formContainer.appendChild(divOptions);
  divOptions.appendChild(SpanDots);
  divOptions.appendChild(divBtnOptions);
  divBtnOptions.appendChild(BtnDelete);
  divBtnOptions.appendChild(BtnLeft);
  divBtnOptions.appendChild(BtnRight);
  BtnDelete.appendChild(SpanDelete);
  BtnLeft.appendChild(SpanLeft);
  BtnRight.appendChild(SpanRight);
  CardArticle.appendChild(divTag);
  CardArticle.appendChild(divArticleTitle);
  CardArticle.appendChild(divProgress);
  CardArticle.appendChild(divArrows);
  SpanTag.appendChild(SpanText);
  divTag.appendChild(SpanTag);
  articleTitle.appendChild(articleTitleText);
  divArticleTitle.appendChild(articleTitle);
  divProgress.appendChild(smallIcon);
  divProgress.appendChild(smallIconCheck);
  divProgress.appendChild(smallTextProgress);
  smallTextProgress.appendChild(smallText);
  btnArrowUp.appendChild(iconBtnUp);
  btnArrowDown.appendChild(iconBtnDown);
  divArrows.appendChild(btnArrowUp);
  divArrows.appendChild(btnArrowDown);
  btnAddCard.appendChild(iconAddCard);
  btnAddCard.appendChild(addCardText);
}

addCard.addEventListener('click', getCardStructure);

//  htmlCode += `<article class="app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm js-card" title="Abrir la tarjeta"><div><span class="badge badge-secondary bg-success">JS</span><span class="badge badge-secondary bg-success">Css</span><span class="badge badge-secondary bg-success">Html</span></div><div><h3 class="h6">@@title</h3></div><div class="text-black-50"><small class="pr-2 fas fa-align-left"></small> <small class="far fa-check-square"></small><small title="Subtareas completadas: 3 de 5">3/5</small></div><div class="app-card-btns btn-group-vertical btn-group-sm"><button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo"><span class="fas fa-arrow-up"></span></button><button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia arriba"><span class="fas fa-arrow-down"></span></button></div></article>`;
//
//
// htmlCode = `<div class="app-list">`;
// htmlCode += `<div class="p-1 rounded-sm bg-primary shadow">`;
// htmlCode += `<form class="app-list-form align-middle p-1 position-relative">`;
// htmlCode += `<input class="app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" value="@@title" title="Editar el título de la lista" />`;
// htmlCode += `<div class="app-list-options">`;
// htmlCode += `<span class="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>`;
// htmlCode += `<div class="app-list-btns btn-group btn-group-sm">`;
// htmlCode += `<button type="button" class="js-delete-1 btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">`;
// htmlCode += `<span class="fas fa-trash-alt"></span>`;
// htmlCode += `</button>`;
// htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-left" title="Mover esta lista hacia la izquierda">`;
// htmlCode += `<span class="fas fa-arrow-left"></span>`;
// htmlCode += ` </button>`;
// htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-right" title="Mover esta lista htmlCode += hacia la derecha">`;
// htmlCode += `<span class="fas fa-arrow-right"></span>`;
// htmlCode += `</button>`;
// htmlCode += `</div>`;
// htmlCode += `</div>`;
// htmlCode += `</form>`;
// article
// htmlCode += `<article class="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm"
// title="Abrir la tarjeta">`;
// htmlCode += `<div>`;
// htmlCode += `<span class="badge badge-secondary bg-success">JS</span>`;
// htmlCode += `<span class="badge badge-secondary bg-success">Css</span>`;
// htmlCode += `<span class="badge badge-secondary bg-success">Html</span>`;
// htmlCode += `</div>`;
// htmlCode += `<div>`;
// htmlCode += `<h3 class="h6">@@title</h3>`;
// htmlCode += `</div>`;
// htmlCode += `<div class="text-black-50">`;
// htmlCode += `<small class="pr-2 fas fa-align-left"></small>`;
// htmlCode += `<small class="far fa-check-square"></small>`;
// htmlCode += `<small title="Subtareas completadas: 3 de 5">3/5</small>`;
// htmlCode += `</div>`;
// htmlCode += `<div class="app-card-btns btn-group-vertical btn-group-sm">`;
// htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo">`;
// htmlCode += `<span class="fas fa-arrow-up"></span>`;
// htmlCode += `</button>`;
// htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia htmlCode += arriba">`;
// htmlCode += `<span class="fas fa-arrow-down"></span>`;
// htmlCode += `</button>`;
// htmlCode += `</div>`;
// htmlCode += `</article>`;
// botón de añadir tarjeta
// htmlCode += `<button type="button" class="ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta">`;
// htmlCode += `<span class="fas fa-plus"></span> Añadir otra tarjeta`;
// htmlCode += `</button>`;
// htmlCode += `</div>`;
// htmlCode += `</div>`;
