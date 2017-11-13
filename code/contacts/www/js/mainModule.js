
 var contactObject={
   prepareUI:function(){
             var createContactElement = document.getElementById("createContact");
             createContactElement.addEventListener('click', this.createContactHandler.bind(this));

             var createContactElement = document.getElementById("findContact");
             createContactElement.addEventListener('click', this.findContactHandler.bind(this));

   },
   createContactHandler:function(event){
     var nameElement = document.getElementById("name");
     var numberElement = document.getElementById("number");
     this.createContact(nameElement.value, numberElement.value);
   },
   createContact:function(name, numberValue){

     var newContact =navigator.contacts.create();
     newContact.displayName = name;
     newContact.phoneNumbers = [{"value":numberValue}];
     newContact.save(this.onSuccess, this.onFailure);
   },
   findContactHandler:function(event){
     var nameElement = document.getElementById("name");
     var numberElement = document.getElementById("number");
     this.findContact(nameElement.value, numberElement.value);
   },
   findContact:function(name, numberValue){
     var options      = new ContactFindOptions();
     options.filter   = name;
     options.multiple = true;
     var fields       = [navigator.contacts.fieldType.displayName];
     navigator.contacts.find(fields, this.onSuccess, this.onFailure, options);
   },
   onSuccess:function(event){
     alert("Succeed! " +JSON.stringify(event));
   },
   onFailure:function(event){
     alert("Fail! " +event);
   }
 };
contactObject.prepareUI();
