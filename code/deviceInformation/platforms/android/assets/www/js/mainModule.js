var mainObject={
  prepareUI:function(){
    var deviceElement = document.getElementById("deviceInformation");
    deviceElement.addEventListener('click', this.displayInformation.bind(this));
  },
  displayInformation:function(){
    alert(JSON.stringify(device));
  }
};
mainObject.prepareUI();
