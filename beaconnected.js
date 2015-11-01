if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  //Template.hello.helpers({
   // counter: function () {
   //   return Session.get('counter');
   // }
  //});
  
// Router.route('/', function () {
  //this.render('header', 'about_us');
//});


Router.map(function () {
  this.route('home', {
  path: '/',
  template: 'myHomeTemplate',
  layoutTemplate: 'layout'
  });
});

Router.map(function () {
  this.route('search', {
  path: '/search',
  template: 'myHomeTemplate',
  layoutTemplate: 'footer'
  });
});
Router.map(function () {
  this.route('/', {
  path: '/listings/individual',
  template: 'individual',
  layoutTemplate: 'individual_listings_page'
  });
});

Router.map(function () {
  this.route('/', {
  path: '/listings/business',
  template: 'business',
  layoutTemplate: 'business_listings_page'
  });
});
Router.map(function () {
  this.route('/', {
  path: '/listings/service',
  template: 'services',
  layoutTemplate: 'services_listings_page'
  });
});


Router.route('/items', function () {
  this.render('about_us');
});

Router.route('/items/:_id', function () {
  var item = Items.findOne({_id: this.params._id});
  this.render('about_us', {data: item});
});

Router.route('/files/:filename', function () {
  this.response.end('hi from the server\n');
}, {where: 'server'});

Router.route('/restful', {where: 'server'})
  .get(function () {
    this.response.end('get request\n');
  })
  .post(function () {
    this.response.end('post request\n');
  });

  //Template.hello.events({
    //'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
    //}
  //});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
