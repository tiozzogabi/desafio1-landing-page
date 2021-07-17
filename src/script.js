let navBar = document.querySelector(".fa-bars");
let menuItems = document.querySelector(".menu-items");
let menuIcons = document.querySelector(".social-media");
let navItems = Array.from(document.querySelectorAll(".nav-items"));
let icons = Array.from(document.querySelectorAll(".fab"));

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let submitBtn = document.getElementById("submitBtn");

let modal = document.querySelector(".modal-container");
let modalActive = false;

//navbar responsive animation
navBar.addEventListener("click", (e) => {
  if (e) {
    menuItems.classList.toggle("responsive-nav");
    menuIcons.classList.toggle("responsive-nav");
    menuItems.classList.toggle("responsive-ul");
    menuIcons.classList.toggle("responsive-icons");
    navItems.map((item) => {
      item.classList.toggle("responsive-li");
    });
    icons.map((item) => {
      item.classList.toggle("responsive-i");
    });
  }
});

//local storage
submitBtn.addEventListener("click", (e) => {
  if (userName.value == "" || userEmail.value == "") {
    alert("Por favor, preencha os campos obrigatórios.");
  } else {
    let name = userName.value;
    let email = userEmail.value;
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    if (e) {
      userName.value = "";
      userEmail.value = "";

      //abrir e fechar modal
      modalActive = false;
      modal.classList.add("open-modal");
      if (modal.classList.contains("open-modal")) {
        modalActive = true;
        if (modalActive) {
          modal.addEventListener("click", (e) => {
            if (e) {
              modalActive = false;
              if (modalActive == false) {
                modal.classList.remove("open-modal");
              }
            }
          });
        }
      }
    }
  }
});
