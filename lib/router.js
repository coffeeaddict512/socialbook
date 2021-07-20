import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


BlazeLayout.setRoot('.container');

// Create index route
FlowRouter.route('/', {
    name: 'index',
    action() {
      // Do something here
      // After route is followed
      BlazeLayout.render('app_layout', {nav: 'nav' , header: 'signInForm'});
    }
  });

    // Create profiles route
    FlowRouter.route('/profiles', {
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
    FlowRouter.route('/profile/:pid', {
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
