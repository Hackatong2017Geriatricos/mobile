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

//poner marcas
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
              
              //objeto de prueba
              var json = [{"url":"www.geriatrico.com.ar","nombre":"Geriatrico1","descripcion":"descGeriatrico1","telefono":"4602932","latitud":"-31.4141082","longitud":"-64.1892319","direccion":"Estrada 147 Córdoba","email":"fundacion@hotmail.com","estado_habilitacion":"habilitado","ente_habilitador":"Provincia","plazas_habilitadas":25,"fecha_actualizacion":"31/12/1900","fecha_creacion":"01/01/1900"},{"url":"www.geriatrico.com.ar","nombre":"Geriatrico2","descripcion":"descGeriatrico2","telefono":"4602932","latitud":"-31.4180885","longitud":"-64.1833096","direccion":"Estrada 147 Córdoba","email":"fundacion@hotmail.com","estado_habilitacion":"habilitado","ente_habilitador":"Provincia","plazas_habilitadas":25,"fecha_actualizacion":"31/12/1900","fecha_creacion":"01/01/1900"}]  

              for(var i = 0; i < json.length; i++)
                {
                  var numeroTelef = parseFloat(json[i].telefono);
                 //var sContent = '<a href ="item.html?titulo='+json[i].titulo+'&telef='+numeroTelef+'&desc='+json[i].descripcion+'"> <div class="contenido"><h3>'+json[i].nombre+'</h3><br><h4>'+json[i].descripcion+'</h4></div> <br> <input type ="button" class="btnVer" value="Ver mas"/> </a>';
                  var sContent = '<div class="contenido"><h4>'+json[i].nombre+'</h4><p><h3>'+json[i].descripcion+'</h3></p><p><h5>Teléfono: '+numeroTelef+'</h5></p><h5>Email: '+json[i].email+'</h5><h5>'+json[i].url+'</h5></p><p><h5>Estado de habilitacion: '+json[i].estado_habilitacion+'</h5><h5>Ente habilitador: '+json[i].ente_habilitador+'</h5></div>';

                  infoWindow = new google.maps.InfoWindow({ content: sContent});

                  var latitudP = parseFloat(json[i].latitud);
                  var longP =parseFloat(json[i].longitud);

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
  

/*}*/


