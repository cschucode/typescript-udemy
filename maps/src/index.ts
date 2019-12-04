// import { User } from './User';
// import { Company } from './Company';

function initialize() {
   new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0
        } 
    });
}

google.maps.event.addDomListener(window, "load", initialize);
