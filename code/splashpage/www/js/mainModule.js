var mainObject={
  hideSplash:function () {
   navigator.splashscreen.hide();
 },
  showSplash:function(){
    navigator.splashscreen.show();
    setTimeout(this.hideSplash, 1000);

  },
  prepareUI:function(){

    var splashpageElement = document.getElementById("splashpage");
      splashpageElement.addEventListener('click', this.showSplash.bind(this), false);

  }
};
mainObject.prepareUI();
