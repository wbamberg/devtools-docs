var whereami = document.getElementById('where-am-i');

var mapIsLoaded = false;

function error(error) {
  console.log("navigator.geolocation.getCurrentPosition returned an error");
}

function getMap() {

  var mapDiv = document.getElementById("map");
  if (mapDiv) {
    document.body.removeChild(mapDiv);
  }

  mapDiv = document.createElement("div");
  mapDiv.id = "map";

  mapDiv.style.width = window.innerWidth-60 + "px";
  mapDiv.style.height = window.innerHeight-140 + "px";

  document.body.appendChild(mapDiv);

  var options={
    elt:document.getElementById('map'),
    zoom:13,
    latLng:{lat:51.5, lng:0},
    mtype:'osm'
  };

  window.map = new MQA.TileMap(options);

  MQA.withModule('largezoom', function() {
    map.addControl(
      new MQA.LargeZoom(),
      new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT, new MQA.Size(5,5))
    );

  });

  var whereiam=new MQA.Poi( {lat:51.5, lng:0} );

  map.addShape(whereiam);
  mapIsLoaded = true;
}

whereami.onclick = function() {
  getMap();
};

window.addEventListener("resize", function() {
  getMap();
}, false);

whereami.click();