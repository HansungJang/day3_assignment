function onGeoOk(position) {
  console.log(position);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

if (window.location.protocol === "https:") {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {
  console.error("Geolocation is only supported on secure origins.");
}
