const cards = document.querySelectorAll('.card');
const modalOvarlay = document.querySelector('.modal-overlay');
const modal  = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const maximizeButton = document.querySelector('.expand-modal');

const close = () =>{
  modalOvarlay.classList.remove('active');
  modalOvarlay.querySelector('iframe').src ="";
  modal.classList.remove('maximize');
}

closeButton.addEventListener('click', close);

maximizeButton.addEventListener('click', function(){
  if(modal.classList.contains('maximize')) {
    modal.classList.remove('maximize');
  } else {
    modal.classList.add('maximize');
  }
});

for(let card of cards){
  let cardId = card.getAttribute('id');
  card.querySelector('.card-title').addEventListener('click', function(){
    modalOvarlay.classList.add('active');
    modalOvarlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`;
  });
}




