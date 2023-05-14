document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-toggle");
    const header = document.querySelector("header");
    const menuList = document.querySelector(".navigation");

    menuButton.addEventListener("click", function() {
      const expanded = header.getAttribute("aria-expanded") === "true" || false;
      header.setAttribute("aria-expanded", !expanded);

    if(expanded){
        menuButton.setAttribute('data-menu-toggle', false);
    } else{
        menuButton.setAttribute('data-menu-toggle', true);
    }
    //   menuList.hidden = !menuList.hidden;
    });
  });