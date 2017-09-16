
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    
    zoom: 16,
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
 nearFoods(map);

//revisar login
//getStatus(); 

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


function nearFoods(map){
    

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };

          

          $.ajax({
              type: "GET",
              url: "http://calm-plains-52456.herokuapp.com/ofertas.json",
              dataType:"json",
              success:function(platos){

              
              //var platos = [{"id":6,"titulo":"sadad","descripcion":"asdasd","precio":"2233","forma_pago":"asas","cover_content_type":"image/jpeg","usuario_id":2,"categorium_id":null,"ubicacion":"","ciudad_id":null,"comercio":"ariel.slade.1","valoracion":"4","lat":"-31.430228","long":"-64.207449","url":"http://localhost:3000/oferta/6.json"},{"id":7,"titulo":"probando","descripcion":"a ver","precio":"2","forma_pago":"asas","cover_content_type":null,"usuario_id":2,"categorium_id":null,"ubicacion":"","ciudad_id":null,"comercio":"juanaugustososa","valoracion":"4","lat":"-31.430069999999994","long":"-64.2060861","url":"http://localhost:3000/oferta/7.json"}]  

              for(var i = 0; i < platos.length; i++)
                {
                  var numeroTelef = parseFloat(platos[i].extension);
                 
                  var sContent = '<a href ="item.html?titulo='+platos[i].titulo+'&precio='+platos[i].precio+'&telef='+numeroTelef+'&desc='+platos[i].descripcion+'&img=http://s3.amazonaws.com/oferty/defi/'+platos[i].id+'&iduser='+platos[i].comercio+'"> <div class="contenido"><img src="http://s3.amazonaws.com/oferty/defi/'+platos[i].id+'"/ alt="" ><h3>'+platos[i].titulo+'</h3><br><p>Precio: $'+platos[i].precio+'</p></div> <br> <input type ="button" class="btnVer" value="Ver mas"/> </a>';

                  infoWindow = new google.maps.InfoWindow({ content: sContent});

                  var latitudP = parseFloat(platos[i].lat);
                  var longP =parseFloat(platos[i].long);

                  console.log(latitudP);
                  console.log(longP);

                  var imageG = {
                  url: 'images/point1.png'
                  };  

                  var mark = new google.maps.Marker({
                    position: {lat: latitudP, lng: longP},
                    map: map,
                    title: platos[i].title,
                    info: sContent,
                    icon: imageG
                  });

                  google.maps.event.addListener( mark, 'click', function() {    
                  infoWindow.setContent( this.info );       
                  infoWindow.open( map, this );
                    
                  });           
                }
              }
          
          });
  


}

var logout = function () { 
                facebookConnectPlugin.logout( 
                    function (response) { console.log(JSON.stringify(response)) 

                      navigator.app.exitApp();
                    },
                    function (response) { console.log(JSON.stringify(response)) });
            }            


// $ document ready
