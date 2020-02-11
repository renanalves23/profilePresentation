const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click" , function() {
      modalOverlay.classList.add("active")
    })
}

const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active')

}) 