document.addEventListener("DOMContentLoaded", function() {
    var planets = document.getElementsByClassName("title-planets");

    Array.from(planets).forEach(function(planet) {
        planet.addEventListener("click", function() {

            event.preventDefault();

            var text = this.nextElementSibling;

            if (text.style.display === "none") {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        });
    });
});