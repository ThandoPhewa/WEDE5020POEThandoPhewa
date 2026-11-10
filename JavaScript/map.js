// 1) Check that the map container and Leaflet library are available.
var mapElement = document.getElementById("map");

if (mapElement && typeof L !== "undefined") {
    // 2) Create an interactive map centred on the wider KwaZulu-Natal region.
    // This is a regional reference point, not the exact business address.
    var map = L.map("map").setView([-29.0, 30.5], 7);

    // 3) Add map tiles from OpenStreetMap.
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // 4) Add a marker for the general service area.
    var serviceMarker = L.marker([-29.0, 30.5]).addTo(map);

    // 5) Add a popup explaining that orders are arranged in selected areas.
    serviceMarker.bindPopup(
        "<strong>Lulu's Sugarcraft Studio</strong><br>Selected areas of KwaZulu-Natal.<br>Confirm collection or delivery arrangements when enquiring."
    );
}
