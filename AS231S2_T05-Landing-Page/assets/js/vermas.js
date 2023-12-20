function mostrarMas() {
    var additionalContent = document.getElementById('additionalContent');
    var botonVerMas = document.querySelector('button');

    if (additionalContent.style.display === 'none') {
      additionalContent.style.display = 'block';
      botonVerMas.textContent = 'Ver Menos';
    } else {
      additionalContent.style.display = 'none';
      botonVerMas.textContent = 'Ver Más';
    }
  }

