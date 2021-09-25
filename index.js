// llamado a las opciones del menu
const OPCION1 = document.getElementById('S1');
const OPCION2 = document.getElementById('S2');
const OPCION3 = document.getElementById('S3');
const OPCION4 = document.getElementById('S4');
const OPCION5 = document.getElementById('S5');
const OPCION6 = document.getElementById('S6');

// llamado a el submenu de cada opcion
const SUBMENU1 = document.getElementById('S1S');
const SUBMENU2 = document.getElementById('S2S');
const SUBMENU3 = document.getElementById('S3S');
const SUBMENU4 = document.getElementById('S4S');
const SUBMENU5 = document.getElementById('S5S');
const SUBMENU6 = document.getElementById('S6S');

// funcion para mostrar el submenu
function openSubmenu(option, submenu) {
    option.addEventListener('click', () => {
        if (submenu.style.display == 'grid') {
            submenu.style.display = 'none';
        } else {
            SUBMENU1.style.display = 'none';
            SUBMENU2.style.display = 'none';
            SUBMENU3.style.display = 'none';
            SUBMENU4.style.display = 'none';
            SUBMENU5.style.display = 'none';
            SUBMENU6.style.display = 'none';
            submenu.style.display = 'grid';
        }
    })
}

// llamado a las funcion en cada opcion
openSubmenu(OPCION1, SUBMENU1);
openSubmenu(OPCION2, SUBMENU2);
openSubmenu(OPCION3, SUBMENU3);
openSubmenu(OPCION4, SUBMENU4);
openSubmenu(OPCION5, SUBMENU5);
openSubmenu(OPCION6, SUBMENU6);