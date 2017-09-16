
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    
    zoom: 14,
    disableDefaultUI: true
  });
  

  // Try HTML5 geolocation.
  
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      localStorage.setItem("latActual", position.coords.latitude );
      localStorage.setItem("longActual", position.coords.longitude );

      //alert(position.coords.latitude);


      var image = {
      url: 'images/point.png'
      };

      var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
      };


      var marker = new google.maps.Marker( { 
            position: pos,     
            map: map,
            shape: shape,      
            icon: image
      });
      
      map.setCenter(pos);

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  


//poner publicaciones de otros
 marcasGeriatricos(map);



}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


function marcasGeriatricos(map){
    

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };

          

          /*$.ajax({
              type: "GET",
              url: "http://url.json",
              dataType:"json",
              success:function(json){*/

              
              var json = [{"id":6,"titulo":"Geriatrico1","descripcion":"descGeriatrico1","telefono":"4602932","lat":"-31.4141082","long":"-64.1892319"},{"id":6,"titulo":"geriatrico2","descripcion":"descGeriatrico2","telefono":"4603432","lat":"-31.4180885","long":"-64.1833096"}]  

              for(var i = 0; i < json.length; i++)
                {
                  var numeroTelef = parseFloat(json[i].telefono);
                 
                  var sContent = '<a href ="item.html?titulo='+json[i].titulo+'&telef='+numeroTelef+'&desc='+json[i].descripcion+'"> <div class="contenido"><img src="http://s3.amazonaws.com/oferty/defi/'+json[i].id+'"/ alt="" ><h3>'+json[i].titulo+'</h3><br></div> <br> <input type ="button" class="btnVer" value="Ver mas"/> </a>';

                  infoWindow = new google.maps.InfoWindow({ content: sContent});

                  var latitudP = parseFloat(json[i].lat);
                  var longP =parseFloat(json[i].long);

                  console.log(latitudP);
                  console.log(longP);

                  var imageG = {
                  url: 'images/point1.png'
                  };  

                  var mark = new google.maps.Marker({
                    position: {lat: latitudP, lng: longP},
                    map: map,
                    title: json[i].title,
                    info: sContent,
                    icon: imageG
                  });

                  google.maps.event.addListener( mark, 'click', function() {    
                  infoWindow.setContent( this.info );       
                  infoWindow.open( map, this );
                    
                  });           
                }
              }
          
          /*});*/
  




