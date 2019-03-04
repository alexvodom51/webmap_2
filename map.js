'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoidmFub2RvbSIsImEiOiJjanNndmRsYjcxdXpvNGFvYXZrM3ZqZTU3In0.AufqiUBrMbrHLFmUOX5Viw'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vanodom/cjsgvrbnv1kcu1fqslu2esdg9',
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

// this is an event handler
geolocate.on('geolocate', function(event) {
    console.log(event.coords)
})

geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})



let data = [
    {
        location: [10.4381746,33.3714353],
        content: 'Ecole 2 - Metameur'
    },
    {
        location: [10.0610957,33.90659],
        content: 'Ecole 2 - Bouchamma'
    }, 
    {
        location: [10.59488,34.56967],
        content: 'Ecole 2 - Nakata'
    }, 
    {
        location: [10.13022,34.46856],
        content: 'Ecole 2 - Toujane'
    }, 
    {
        location: [9.867255,33.53484],
        content: 'Ecole 2 - Tamezret'
    }, 
    {
        location: [10.28917,32.86764],
        content: 'Ecole 2 - Douiret'
    },   
]
data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})