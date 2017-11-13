var contactObject={
  prepareUI:function(){
            var captureElement = document.getElementById("captureId");
            captureElement.addEventListener('click', this.captureHandler.bind(this));
  },
  captureHandler:function(event){
  navigator.camera.getPicture(this.onSuccess, this.onFailure);
  },
  onSuccess:function(event){
    alert("Succeed! " +JSON.stringify(event));
    var imageId = document.getElementById("imageId");
    imageId.setAttribute('src', event);
  },
  onFailure:function(event){
    alert("Fail! " +event);
  }
};
contactObject.prepareUI();
