console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillcolor: '#ffffa1'
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFybmV5OTkiLCJhIjoiY2wwenc2OWs2MHZ5bDNjazE4YnozeDQzaiJ9.nk5v3EB0Qkctvxarn7D8ng'
}).addTo(map);