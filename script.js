function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var attempts = 4;

  while (attempts > 0) {
    if (username === "alejo" && password === "1234") {
      alert("¡Inicio de sesión exitoso!");
      return true;
    } else {
      attempts--;
      alert(`Credenciales incorrectas. Te quedan ${attempts} intentos.`);
      username = "";
      password = "";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  }

  alert("Has excedido el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  return false;
}

let loginAttempts = 4;

function validateLogin() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (usernameInput.value === 'alejo' && passwordInput.value === '1234') {
    alert('¡Inicio de sesión exitoso!');
  } else {
    loginAttempts--;
    alert(`Credenciales incorrectas. Te quedan ${loginAttempts} intentos.`);

    if (loginAttempts === 0) {
      usernameInput.value = '';
      passwordInput.value = '';
      alert('Se agotaron los intentos. Por favor inténtalo de nuevo más tarde.');
    }
  }
}