var mainObject={
  prepareUI:function(){
    var beepElement = document.getElementById("beep");
    beepElement.addEventListener('click', this.beepEvent);

    var viberateElement = document.getElementById("viberate");
    viberateElement.addEventListener('click', this.viberateEvent);
  },
  beepEvent:function(event){
    navigator.notification.beep(3);
  },

  viberateEvent:function(event){
    navigator.notification.vibrate(500);
  }
};
mainObject.prepareUI();
