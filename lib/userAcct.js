import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const userSubmit = function(error, state){
    if (!error) {
      if (state === "signIn") {
          Meteor.logoutOtherClients();
        // Successfully logged in
        // ...
      }
      if (state === "signUp") {
        // Successfully registered
        // ...
      }
    }
}


const userLogOut = function(){
    if(FlowRouter.getRouteName() != "index")
    FlowRouter.go("index");
}

Accounts.onLogout(function(){
    if(FlowRouter.getRouteName() != "index")
    FlowRouter.go("index");
});

AccountsTemplates.configure({
    showForgotPasswordLink: true,
    onSubmitHook: userSubmit, 
    onLogoutHook: userLogOut,
});

 //AccountsTemplates.addField({
    //_id: 'name',
    //type: 'text',
    //displayName: "Name",
    //required: true,
    //func: function(value){return value !== 'Full Name';},
    //errStr: 'Only "Full Name" allowed!',
//});

//AccountsTemplates.addField({
    //_id: "sex",
    //type: "select",
    //displayName: "Sex",
    //select: [
        //{
            //text: "Male",
            //value: "male",
        //},
        //{
            //text: "Female",
            //value: "female",
        //},
    //],
//});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
        _id: "sex",
        type: "select",
        displayName: "Sex",
        select: [
            {
                text: "Male",
                value: "male",
            },
            {
                text: "Female",
                value: "female",
            },
        ], 
    },
    pwd
]);