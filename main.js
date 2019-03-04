jQuery(document).ready(function () {
    jQuery('.slider-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    });
});

function bottomFunction() {
    var element = document.querySelector("#contact");
    element.scrollIntoView({behavior: "smooth"});
}

function showMap(coordinates, infoContent) {
    var point = {lat: 40.6577799, lng: -73.9147717};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: point});

    var marker = new google.maps.Marker({
        position: {lat: 40.6640304, lng: -73.915115},
        map: map,
        icon: "images/marker.png"
    });
}

