function initialize() {
    var myLatlng = new google.maps.LatLng(37.5719342,126.987372); // y, x좌표값
    var mapOptions = {
            zoom: 15,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: "정샘물뷰티"
    });
    var infowindow = new google.maps.InfoWindow(
            {
                content: "<h1>정샘물뷰티</h1>",
                maxWidth: 300
            }
    );

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });
}
