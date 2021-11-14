const API_KEY = "b9d59f28e48bbbe151123c2df41753a2"

function onGeoSuccess(position){        /* 위치에 관한 오브젝트를 한개 받는다. */
    const lat = position.coords.latitude;       /* 위도 */
    const lng = position.coords.longitude;      /* 경도 */
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`     /* API를 저장. */
    fetch(url);     /* URL을 부른다. */
}

function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);