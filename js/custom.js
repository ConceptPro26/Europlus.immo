// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.837167, lng: 2.245380 },
    zoom: 14,
    mapId: "24afead6c35d66f7",
  });
  const priceTag = document.createElement("div");

  priceTag.className = "price-tag";
  priceTag.textContent = "$2.5M";

  const markerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: {     center: { lat: 48.837167, lng: 2.245380 },
 },
    content: priceTag,
  });
}

window.initMap = initMap;

