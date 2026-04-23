 const form = document.getElementById("formulario");
  const alerta = document.getElementById("alerta");

  form.addEventListener("submit", function(e){
    e.preventDefault(); // evita recarga
    alerta.classList.remove("d-none"); // muestra alerta
    form.reset(); // limpia formulario
  });