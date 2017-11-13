var mainObject={

  prepareUI:function(){
      var alertElement = document.getElementById("alert");
      alertElement.addEventListener('click',this.onSuccessAlert.bind(this), this.onFailure);

      var confirmElement = document.getElementById("confirm");
      confirmElement.addEventListener('click', this.onSuccessConfirm.bind(this), this.onFailure);

      var promptElement = document.getElementById("prompt");
      promptElement.addEventListener('click', this.onSuccessPrompt.bind(this), this.onFailure);
  },
  onSuccessPrompt:function(event){
    navigator.notification.prompt('Please enter your nickname', this.getData, 'Nickname?', ['Cancel', 'OK'], 'Jimmy');
  },
  getData:function(res) {

   navigator.notification.alert(res);

 },

  onSuccessConfirm:function(event){
    navigator.notification.confirm('Do you want to continue?',this.doContinue, 'Please confirm', 'Yes, No');
  },
  doContinue:function(buttonNum){

   navigator.notification.alert('You chose option #' +    buttonNum + '?', null, 'Really?', 'Yes');

 },
  onSuccessAlert:function(event){
    navigator.notification.alert("This is a Cordova Alert.",null, "Alert Test", "Click Me!");
  },
  onFailure:function(event){
    navigator.notification.alert("Failing");
  }
};
mainObject.prepareUI();
