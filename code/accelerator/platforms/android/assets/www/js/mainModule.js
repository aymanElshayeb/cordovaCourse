var mainObject={
  prepareUI:function(){
            var actionElement = document.getElementById("actionButton");
            actionElement.addEventListener('click', this.handler.bind(this));
  },
  handler:function(event){
  navigator.accelerometer.getCurrentAcceleration(this.onSuccess, this.onFailure);
  },
  onSuccess:function(event){
    alert("Succeed! " +JSON.stringify(event));

  },
  onFailure:function(event){
    alert("Fail! " +event);
  }
};
mainObject.prepareUI();
