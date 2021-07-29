Template.signInForm.helpers({
    username(){
        return Meteor.user().username;//.emails[0].address;
    }
});