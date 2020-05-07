'use strict';

// edit

const toggleEdit = (ev) => {
  ev.stopPropagation();
  document.querySelector('.js-edit').classList.toggle('show');
  document.querySelector('.js-edit').classList.remove('d-none');
};

document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
  card.addEventListener('click', toggleEdit);
});

const preventEditClosing = (ev) => {
  ev.stopPropagation();
};

document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);

//delete

// function deleteCard() {
//   console.log('me ha clickado');
//   card.remove();
// }
// const card = document.querySelector('.app-list');
// const deleteBtn = document.querySelector('.js-delete-1').addEventListener('click', deleteCard);
