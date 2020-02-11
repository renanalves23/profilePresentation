const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click" , function() {
      const videoId = 
      modalOverlay.classList.add("active");
      modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active')

}) 

