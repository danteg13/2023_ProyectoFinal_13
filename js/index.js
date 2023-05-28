// Obtenemos las referencias a los elementos del DOM
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const videoList = document.querySelector('.video-list');

// Evento para desplazarse a la izquierda
prevArrow.addEventListener('click', () => {
  videoList.scrollBy({
    left: -300, // Desplazamiento de 300px hacia la izquierda
    behavior: 'smooth' // Desplazamiento suave
  });
});

// Evento para desplazarse a la derecha
nextArrow.addEventListener('click', () => {
  videoList.scrollBy({
    left: 300, // Desplazamiento de 300px hacia la derecha
    behavior: 'smooth' // Desplazamiento suave
  });
});

// Obtener todas las flechas de reproducción
const playArrows = document.querySelectorAll('.fa-play-circle');

// Iterar sobre cada flecha de reproducción y cambiar el color a verde
playArrows.forEach((arrow) => {
  arrow.style.color = '#00ff00'; // Cambia el color de la flecha a verde (#00ff00)
});

// Filtrar generos
window.addEventListener('DOMContentLoaded', function() {
  const genreButtons = document.querySelectorAll('.genre-button');
  const genreContainer = document.querySelector('.genre-container');

  genreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const genre = button.getAttribute('data-genre');

      // Mostrar todos los videos
      if (genre === 'todos') {
        genreContainer.querySelectorAll('.video2').forEach(function(video) {
          video.style.display = 'block';
        });
      } else {
        // Ocultar los videos que no coinciden con el género seleccionado
        genreContainer.querySelectorAll('.video2').forEach(function(video) {
          const videoGenre = video.getAttribute('data-genre');

          if (videoGenre === genre) {
            video.style.display = 'block';
          } else {
            video.style.display = 'none';
          }
        });
      }
    });
  });
});
