(function() {
    const openingBtm = document.querySelector(".sidebar__hamburger");
    const closingBtm = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector('.sidebar');
    
    openingBtm.addEventListener("click", function() {
        sidebar.classList.add('sidebar--opened');
    });
    
    closingBtm.addEventListener("click", function() {
        sidebar.classList.remove('sidebar--opened');
    });
}() )
