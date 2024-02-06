  document.addEventListener('DOMContentLoaded', function(){
    let menu = document.getElementById('menu');
    let openMenu = document.getElementById('open-menu');
    let closeMenu = document.getElementById('close-menu');
    let navigation = document.querySelector('.snap__navigation');
    let label = document.querySelector('.snap__label');
    
   

    menu.addEventListener('change', function(){
        navigation.classList.toggle('menu-visible');
        label.classList.toggle('label-visible');

        if(menu.checked){
            openMenu.style.display = 'none';
            closeMenu.style.display = 'block';
        }
        else{
            openMenu.style.display = 'block';
            closeMenu.style.display = 'none';
        }

    })


  });
    

  document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces que tienen submenús
    let pushMenus = document.querySelectorAll('.snap__push');

    pushMenus.forEach(function(pushMenu) {
        pushMenu.addEventListener('click', function(event) {
            event.preventDefault(); // Previene la navegación del enlace

            let submenu = this.nextElementSibling; // Accede al submenú relacionado
            let arrowDown = this.querySelector('.arrow-down');
            let arrowUp = this.querySelector('.arrow-up');

            // Muestra u oculta el submenú
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
                arrowDown.style.display = 'block';
                arrowUp.style.display = 'none';
            } else {
                submenu.style.display = 'block';
                // submenu.style.left = '-14%';
                arrowDown.style.display = 'none';
                arrowUp.style.display = 'block';
            }
        });
    });
});