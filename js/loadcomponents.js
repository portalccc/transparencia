// load-components.js

function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        });
}

// Carrega o cabeçalho e rodapé em cada página
window.addEventListener("DOMContentLoaded", function() {
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});




function redirectToSearchPage(event) {
    event.preventDefault(); // Impede que o campo de entrada seja focado
    window.location.href = '/inicio/emdesenvolvimento.html'; // Redireciona para a nova página
  }
