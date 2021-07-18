 AccountsTemplates.configure({
    showForgotPasswordLink: true,
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