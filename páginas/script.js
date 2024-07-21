document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slides img');
    const totalSlides = slides.length;
    let slideIndex = 0;
    const intervalTime = 5000; // Slowing down the interval to 5 seconds

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        document.querySelector('.carousel-slides').style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function showNextSlide() {
        showSlide(slideIndex + 1);
    }

    function showPrevSlide() {
        showSlide(slideIndex - 1);
    }

    document.querySelector('.next').addEventListener('click', showNextSlide);
    document.querySelector('.prev').addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, intervalTime);
});


document.getElementById('formulario-comentario').addEventListener('submit', function(event) {
    event.preventDefault();
    var comentario = document.getElementById('comentario').value;
    var novoComentario = document.createElement('p');
    novoComentario.textContent = comentario;
    document.getElementById('comentarios-anteriores').appendChild(novoComentario);
});
