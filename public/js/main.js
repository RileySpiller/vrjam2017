// On mobile remove elements that are resource heavy
var isMobile = AFRAME.utils.device.isMobile();

if (isMobile) {
  var particles = document.getElementById('particles');
  particles.parentNode.removeChild(particles);
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

 document.querySelector("#itemOfInterest").addEventListener('loaded', function() {
   document.querySelector('#ioi').addEventListener('model-loaded', function() {
     var bbox = new THREE.Box3().setFromObject(this.object3D)
     var x = bbox.max.x-bbox.min.x;
     var y = bbox.max.y-bbox.min.y;
     var z = bbox.max.z-bbox.min.z;
     var m = Math.max(x,Math.max(y,z));
     var s = 1.5/m;
     this.setAttribute("scale", s+" "+s+" "+s);
   });
 });
 console.log('INCOMING');
 console.log(getParameterByName("ioi", window.location));
document.querySelector("#itemOfInterest").setAttribute("src", getParameterByName("ioi", window.location));
document.querySelector("#scenery").setAttribute("src", getParameterByName("scenery", window.location));
var roomName = getParameterByName("room", window.location);
document.querySelector("#scene").setAttribute("networked-scene", "room: " + roomName + "; debug: true;");