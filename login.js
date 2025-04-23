document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
  });
  
  // Tema claro/oscuro
  document.getElementById('toggleTheme').addEventListener('change', function () {
    document.body.classList.toggle('light', this.checked);
  });
  
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error-message');
  
    if (email && password) {
      error.innerText = '';
      document.body.classList.add('show-loader');
  
      setTimeout(() => {
        document.body.classList.remove('show-loader');
        document.getElementById('loginContainer').classList.remove('active');
        document.getElementById('profileSetup').classList.add('active');
      }, 1500); // Simula animación de carga
    } else {
      error.innerText = 'Por favor, completa todos los campos.';
    }
  }
  
  let selectedAvatar = null;
  
  function selectIcon(imgElement) {
    document.querySelectorAll('.profile-icons img').forEach(img => img.classList.remove('selected'));
    imgElement.classList.add('selected');
    selectedAvatar = imgElement.src;
  }
  
  function finishProfile() {
    const username = document.getElementById('username').value;
    const fileInput = document.getElementById('customAvatar');
    let avatar = selectedAvatar;
  
    if (!username) {
      alert("Por favor, escribe tu nombre de usuario.");
      return;
    }
  
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function(e) {
        avatar = e.target.result;
        saveAndRedirect(username, avatar);
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else {
      saveAndRedirect(username, avatar);
    }
  }
  
  function saveAndRedirect(username, avatar) {
    localStorage.setItem("username", username);
    localStorage.setItem("avatar", avatar);
    window.location.href = "metal.html";
  }
  
