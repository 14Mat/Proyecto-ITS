//la funcionalidad para que funcione el mapa
function iniciarMap() {
    var coord = {lat:-38.9351044 ,lng:-68.1221581};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

const modal = document.querySelector('.left-section');

modal.addEventListener('click', function() {
    modal.classList.toggle('flip'); // Alternar el estado de giro
});
