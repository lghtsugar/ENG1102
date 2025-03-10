// Initialize the map centered at YorkU
var map = L.map('map').setView([43.7735, -79.5019], 15);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// List of campus locations
var locations = [
    { name: "Student Centre", coords: [43.7730, -79.5010] },
    { name: "Scott Library", coords: [43.7738, -79.5035] },
    { name: "Restroom (Central Hall)", coords: [43.7742, -79.5005] },
    { name: "Filtered Water Fountain", coords: [43.7751, -79.5028] }
];

// Add markers to the map
locations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
     .bindPopup(loc.name);
});

// Search function
function searchLocation() {
    var query = document.getElementById("searchBox").value.toLowerCase();
    var found = locations.find(loc => loc.name.toLowerCase().includes(query));

    if (found) {
        map.setView(found.coords, 17);
        alert("Location found: " + found.name);
    } else {
        alert("Location not found.");
    }
}