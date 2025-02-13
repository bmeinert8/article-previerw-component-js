document.querySelectorAll('.js-share-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.js-share-section').classList.toggle('hidden');
  });
});