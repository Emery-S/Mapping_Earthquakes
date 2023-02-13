
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([44.0, -80.0], 2);

// We create the tile layer that will be the background of our map.
let maps = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
maps.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/Emery-S/Mapping_Earthquakes/main/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data)
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  color: '#FFFFa1',
  weight: 2,
  onEachFeature: function(feature, layer) {
  console.log(feature);
  layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " + feature.properties.dst + "</h3>")}
}).addTo(map);
});