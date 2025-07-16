let containerMenuMin = document.querySelector('#nav-min');
let buttonMenu = document.querySelector('#button-menu-min');

let icon = document.createElement('i');
icon.classList.add('fa-solid', 'fa-bars');
icon.style.color = 'white';

buttonMenu.appendChild(icon);

containerMenuMin.style.display = 'none';

function openMenu() {
    containerMenuMin.classList.toggle('close-menu');

    if (containerMenuMin.classList.contains("close-menu")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-x");
        containerMenuMin.style.display = "block";
    } else {
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
        containerMenuMin.style.display = "none";
    }
}