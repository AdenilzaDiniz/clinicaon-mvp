function showRegister() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("registerSection").style.display = "block";
}

function showLogin() {
  document.getElementById("registerSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("painelSection").style.display = "block";
    mostrarAgendamentos();
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

function register() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("Cadastro realizado com sucesso!");
  showLogin();
}

function agendar() {
  const nome = document.getElementById("nomePaciente").value;
  const data = document.getElementById("dataConsulta").value;
  const hora = document.getElementById("horaConsulta").value;
  const motivo = document.getElementById("motivoConsulta").value;

  const agendamento = { nome, data, hora, motivo };
  let lista = JSON.parse(localStorage.getItem("agendamentos")) || [];
  lista.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(lista));
  mostrarAgendamentos();
}

function mostrarAgendamentos() {
  const lista = JSON.parse(localStorage.getItem("agendamentos")) || [];
  const container = document.getElementById("listaAgendamentos");
  container.innerHTML = "<h3 class='font-bold mb-2'>Consultas Agendadas:</h3>";
  lista.forEach((item, index) => {
    container.innerHTML += `<p>${item.data} às ${item.hora} — ${item.nome}: ${item.motivo}</p>`;
  });
}

function logout() {
  document.getElementById("painelSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}
