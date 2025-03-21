

const sidebarLinks = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.destination-content');

// Add click event listeners to sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the data-target attribute
        const target = link.getAttribute('data-target');

        // Remove the active class from all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Add the active class to the target section
        document.getElementById(target).classList.add('active');
    });
});



   // TO SHOW THE MAP OF ROUTES  --------------------------------


// Initialize the map
const map = L.map('map').setView([-6.3690, 34.8888], 6); // Centered on Tanzania

// Add a base map layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define coordinates for key locations
const locations = {
arusha: [-3.3869, 36.6830], // Arusha
moshi: [-3.3346, 37.3404],  // Moshi Kilimanjaro
darEsSalaam: [-6.7924, 39.2083], // Dar es Salaam
zanzibar: [-6.1659, 39.2026],    // Zanzibar
seronera: [-2.4594, 34.8226]     // Seronera (Central Serengeti)
};

// Add markers for key locations
L.marker(locations.arusha).addTo(map)
.bindPopup('Arusha: Starting point for Serengeti trips.');

L.marker(locations.moshi).addTo(map)
.bindPopup('Moshi Kilimanjaro: Gateway to Serengeti.');

L.marker(locations.darEsSalaam).addTo(map)
.bindPopup('Dar es Salaam: Major city with flights to Serengeti.');

L.marker(locations.zanzibar).addTo(map)
.bindPopup('Zanzibar: Island with flights to Serengeti.');

L.marker(locations.seronera).addTo(map)
.bindPopup('Seronera Airstrip: Central Serengeti, abundant wildlife.');

// Define routes from each point to Serengeti (Seronera)
const routes = [
{ from: locations.arusha, to: locations.seronera, color: 'blue', label: 'Arusha to Seronera' },
{ from: locations.moshi, to: locations.seronera, color: 'green', label: 'Moshi to Seronera' },
{ from: locations.darEsSalaam, to: locations.seronera, color: 'red', label: 'Dar es Salaam to Seronera' },
{ from: locations.zanzibar, to: locations.seronera, color: 'orange', label: 'Zanzibar to Seronera' }
];

// Draw lines for each route
routes.forEach(route => {
L.polyline([route.from, route.to], {
color: route.color,
weight: 3, // Thicker line for better visibility
opacity: 0.7 // Slightly transparent
}).addTo(map)
.bindPopup(route.label); // Add a popup with the route label
});

// Add a legend
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
const div = L.DomUtil.create('div', 'info legend');
div.innerHTML = `
<h4>Legend</h4>
<p><span style="color: blue;">Blue Line</span>: Arusha to Seronera</p>
<p><span style="color: green;">Green Line</span>: Moshi to Seronera</p>
<p><span style="color: red;">Red Line</span>: Dar es Salaam to Seronera</p>
<p><span style="color: orange;">Orange Line</span>: Zanzibar to Seronera</p>
`;
return div;
};
legend.addTo(map);


  
   