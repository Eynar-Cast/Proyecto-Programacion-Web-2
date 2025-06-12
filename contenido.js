document.getElementById('btnSobreNosotros').addEventListener('click', function(e) {
  e.preventDefault();
  fetch('sobre-nosotros.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('principal').innerHTML = html;
    })
    .catch(err => console.error('Error cargando contenido:', err));
});

document.getElementById('btnInicio').addEventListener('click', function(e) {
  e.preventDefault();
  location.reload();
});
