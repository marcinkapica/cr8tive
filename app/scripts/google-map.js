  function initMap() {
    var shire = {lat: -37.8576183, lng: 175.6798615};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: shire
    });
    var marker = new google.maps.Marker({
      position: shire,
      map: map
    });
  }
