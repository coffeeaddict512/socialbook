//import { Random } from 'meteor/random';

myRandNum = function(){
    return Math.floor(Math.random() * profilesdb.find().count());
}

Template.randProfile.helpers({
    theProfile(){
        return profilesdb.find().fetch()[myRandNum()];
    }
});