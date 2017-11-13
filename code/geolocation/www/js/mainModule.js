var mainObject={
  prepareUI:function(){
            var actionElement = document.getElementById("actionButton");
            actionElement.addEventListener('click', this.handler.bind(this));
  },
  handler:function(event){
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onFailure);
  },
  onSuccess:function(position){
    alert('Latitude: '          + position.coords.latitude          + '\n' +
             'Longitude: '         + position.coords.longitude         + '\n' +
             'Altitude: '          + position.coords.altitude          + '\n' +
             'Accuracy: '          + position.coords.accuracy          + '\n' +
             'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
             'Heading: '           + position.coords.heading           + '\n' +
             'Speed: '             + position.coords.speed             + '\n' +
             'Timestamp: '         + position.timestamp                + '\n');
   

  },
  onFailure:function(event){
    alert("Fail! " +JSON.stringify(event));
  }
};
mainObject.prepareUI();
