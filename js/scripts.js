document.addEventListener("DOMContentLoaded", function () {
  const solIcon = document.querySelector(".nav-icone--menu");
  const luaIcon = document.querySelector(".nav-icone--fechar");
  const body = document.body;

  solIcon.addEventListener("click", function () {
    body.classList.add("nav-aberta");
  });

  luaIcon.addEventListener("click", function () {
    body.classList.remove("nav-aberta");
  });
});
