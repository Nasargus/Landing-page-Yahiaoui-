
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("darkModeToggle");
    const body = document.body;

    btn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Enregistrez le mode actuel dans le stockage local
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
    });

    // Vérifiez si le mode sombre est activé dans le stockage local
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
        body.classList.add("dark-mode");
    }
});


//burger
// Attendre que le DOM soit entièrement chargé avant d'exécuter le script

    document.addEventListener('DOMContentLoaded', function () {
        const burgerIcon = document.getElementById('burger-icon');
        const menuList = document.getElementById('menu-list');
        const closeButton = document.getElementById('close-btn');

        // Ajouter un écouteur d'événements pour le clic sur l'icône du burger
        burgerIcon.addEventListener('click', function () {
            // Ajouter ou supprimer la classe 'show' pour afficher ou masquer le menu
            menuList.classList.toggle('show');
        });

        // Ajouter un écouteur d'événements pour le clic sur le bouton 'x'
        closeButton.addEventListener('click', function () {
            // Fermer le menu en supprimant la classe 'show'
            menuList.classList.remove('show');
        });
    });

