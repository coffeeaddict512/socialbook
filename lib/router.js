import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


BlazeLayout.setRoot('.container');

const normal = FlowRouter.group();
const loggedIn = FlowRouter.group({
      triggersEnter: [
        function(context, redirect){
          if(!Meteor.userId()){
            if (context.route.name != 'index')
                redirect('index');
          }
        }
      ]
    });

// Create index route
normal.route('/', {
    name: 'index',
    action() {
      // Do something here
      // After route is followed
      BlazeLayout.render('app_layout', {nav: 'nav' , header: 'signInForm'});
    },
    waitOn(){
      return Meteor.subscribe('noUser');
    }
  });

    // Create profiles route
    loggedIn.route('/profiles', {
      name:"allProfiles",
        action() {
            // Do something here
            // After route is followed
        BlazeLayout.render('app_layout', { nav: 'nav' , mainBody:'myAccounts'});
    },
        waitOn(params) {
            return Meteor.subscribe('profData', params.pid);
      }
  });

    // Create profile route to show an individual profile
    loggedIn.route('/profile/:pid', {
        name: "IndividualProfile" ,
        action(params) {
            // Do something here
            // After route is followed
        BlazeLayout.render('app_layout', {nav: 'nav' , mainBody:'viewProfile'});
    },
    waitOn(params) {
        return Meteor.subscribe('proDat', params.pid);
      }
});

  // Create 404 route (catch-all)
FlowRouter.route('*', {
    action() {
      // Show 404 error page
      BlazeLayout.render('app_layout', {mainBody: 'notFound'});
    }
  });
