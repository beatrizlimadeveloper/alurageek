import { pesquisa } from "./pesquisa.js";

const botaologar = document.getElementById("botaoLogar");
const inputEmail = document.getElementById("inputEmail");
const inputSenha = document.getElementById("inputSenha");

botaologar.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputEmail.value == "alura@alura.com" && inputSenha.value == "alura") {
    window.location.href = "/assets/html/admin.html";
  } else {
    alert(
      " Para entrar na sessão de administrador \n Email: alura@alura.com \n Senha: alura"
    );
  }
});

pesquisa();
