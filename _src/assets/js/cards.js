'use strict';

const addCard = document.querySelector('.js-add-card');
// const listContainer = document.querySelectorAll('.app-list');

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

  const spanDots = document.createElement('span');
  spanDots.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');

  const divBtnOptions = document.createElement('div');
  divBtnOptions.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('type', 'button');
  btnDelete.setAttribute('class', 'js-delete-1 btn btn-light text-muted border shadow-sm');
  btnDelete.setAttribute('title', 'Borrar esta tarjeta');
  const spanDelete = document.createElement('span');
  spanDelete.setAttribute('class', 'fas fa-trash-alt');

  const btnLeft = document.createElement('button');
  btnLeft.setAttribute('type', 'button');
  btnLeft.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-left');
  btnLeft.setAttribute('title', 'Mover esta lista hacia la izquierda');
  const spanLeft = document.createElement('span');
  spanLeft.setAttribute('class', 'fas fa-arrow-left');

  const btnRight = document.createElement('button');
  btnRight.setAttribute('type', 'button');
  btnRight.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-right');
  btnRight.setAttribute('title', 'Mover esta lista hacia la derecha');
  const spanRight = document.createElement('span');
  spanRight.setAttribute('class', 'fas fa-arrow-right');

  const cardArticleContainer = document.createElement('div');
  cardArticleContainer.setAttribute('class', 'card-article-container');

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
  divContainer.appendChild(cardArticleContainer);
  divContainer.appendChild(btnAddCard);
  formContainer.appendChild(formInput);
  formContainer.appendChild(divOptions);
  divOptions.appendChild(spanDots);
  divOptions.appendChild(divBtnOptions);
  divBtnOptions.appendChild(btnDelete);
  divBtnOptions.appendChild(btnLeft);
  divBtnOptions.appendChild(btnRight);
  btnDelete.appendChild(spanDelete);
  btnLeft.appendChild(spanLeft);
  btnRight.appendChild(spanRight);
  btnAddCard.appendChild(iconAddCard);
  btnAddCard.appendChild(addCardText);
  btnAddCard.addEventListener('click', addArticle);
}

// const listenAddBtn = () => {
//   document.querySelectorAll('.ml-1.btn.btn-primary.btn-sm.text-white-50').forEach((button) => {
//     button.addEventListener('click', addArticle);
//   });
// };

const toggleEdit = (ev) => {
  ev.stopPropagation();
  // debugger;
  document.querySelector('.js-edit').classList.toggle('show');
  document.querySelector('.js-edit').classList.remove('d-none');
};

const listenArticle = () => {
  // debugger;
  document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
    card.addEventListener('click', toggleEdit);
  });
};

const preventEditClosing = (ev) => {
  ev.stopPropagation();
};

const addArticle = (ev) => {
  const cardArticleContainer = document.querySelector('.card-article-container');
  // const compareElement = document.querySelector('.p-1 rounded-sm bg-primary shadow');

  const cardArticle = document.createElement('article');
  // cardArticle.addEventListener('click', toggleEdit);
  cardArticle.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
  cardArticle.setAttribute('title', 'Abrir la tarjeta');

  // Esto se tiene que hacer con bucle para que pinte todas las tag
  const divTag = document.createElement('div');
  const spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'badge badge-secondary bg-success');
  const spanText = document.createTextNode('JS');

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

  cardArticle.appendChild(divTag);
  cardArticle.appendChild(divArticleTitle);
  cardArticle.appendChild(divProgress);
  cardArticle.appendChild(divArrows);
  spanTag.appendChild(spanText);
  divTag.appendChild(spanTag);
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

  if (cardArticleContainer.parentNode === ev.currentTarget.parentNode) {
    console.log('entro en el if');
    cardArticleContainer.appendChild(cardArticle);
  }

  listenArticle();
};
// listContainer.forEach((list) => {
//   const contenedorArticles = list.querySelector('.p-1 rounded-sm bg-primary shadow');
//   const buttonAddTask = list.querySelector('.ml-1.btn.btn-primary.btn-sm.text-white-50');
//   buttonAddTask.addEventListener('click', addArticle(contenedorArticles, buttonAddTask));
// });
document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);

addCard.addEventListener('click', getCardStructure);
