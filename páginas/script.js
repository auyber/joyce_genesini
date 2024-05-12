document.getElementById('formulario-comentario').addEventListener('submit', function(event) {
    event.preventDefault();
    var comentario = document.getElementById('comentario').value;
    var novoComentario = document.createElement('p');
    novoComentario.textContent = comentario;
    document.getElementById('comentarios-anteriores').appendChild(novoComentario);
});
