// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-8.05428, -34.8813), // Coordenadas de Recife
        zoom: 12, // Zoom ajustado para mostrar a cidade
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // Marcadores para consultórios e clínicas conveniadas (exemplo)
    var clinics = [
        { lat: -8.0631, lng: -34.8712, title: "Clínica Boa Viagem Cloudlife" },
        { lat: -8.0475, lng: -34.8956, title: "Consultório Dr. João - Centro" },
        { lat: -8.0600, lng: -34.8850, title: "Clínica Piedade Saúde" }
    ];

    // Adiciona marcadores ao mapa
    clinics.forEach(function(clinic) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(clinic.lat, clinic.lng),
            map: map,
            title: clinic.title
        });
    });
}