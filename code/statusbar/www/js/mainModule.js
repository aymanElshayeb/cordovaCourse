var contactObject={
  prepareUI:function(){
    var statusbarElement = document.getElementById("statusbar");
    statusbarElement.addEventListener('click', this.showOrHide.bind(this), false);
  },
  showOrHide:function(){
    if(StatusBar.isVisible){
      StatusBar.hide();

    }else{
      StatusBar.show();
    }
  }
};
contactObject.prepareUI();
