document.addEventListener('DOMContentLoaded', function() {
  const shareButton = document.querySelector('.js-share-button');
  const secondShareButton = document.querySelector('.js-second-share-button');
  const shareContainer = document.querySelector('.share-container');

  shareButton.addEventListener('click', function() {
    shareContainer.classList.toggle('active');
  });

  secondShareButton.addEventListener('click', function() {
    shareContainer.classList.remove('active');
  });
});