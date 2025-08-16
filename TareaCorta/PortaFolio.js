document.getElementById("forCon").addEventListener("submit", function (event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msj = document.getElementById("msj").value.trim();
  let error = document.getElementById("error-message");

  if (name === "" || email === "" || msj === "") {
    error.textContent = "Todos los campos son obligatorios";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = "Ingrese un correo válido";
    return;
  }

  error.textContent = "";
  alert("Formulario enviado correctamente!");
});

const cursor = document.getElementById("cursor-Efecto");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
