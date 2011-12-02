# angular-requirejs-html5boilerplate-seed

This project combines the application skeleton for a typical [Angular](http://angularjs.org/) web 
app with [RequireJs](http://requirejs.org/) for modularized components. It also makes use of 
[Html5Boilerplate](http://html5boilerplate.com/) for a nice starting point, and utilizes 
[Sass](http://sass-lang.com/) so that css development can be fun!

For a detailed explanation of the majority of the files in this project, checkout the original
[angular-seed](https://github.com/angular/angular-seed) project. This will explain all the details 
so you can get running fast!

The seed app doesn't do much, just shows how to wire two controllers and views together. You can
check it out by opening app/index.html in your browser.


## How to use angular-requirejs-html5boilerplate-seed

Clone the angular-seed repository and start hacking...


## Directory Layout

    app/                --> all of the files to be used in production
      compass/          --> sass files
      css/              --> compiled css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        controllers/
          controllers.js    --> root controller file for requirejs
          AppController.js  --> root application controller - handles all routing
          HomeController.js --> the controller for the _home_ view
          DataController.js --> the controller for the _data_ view
        filters/
          filters.js        --> root filter file for requirejs
        services/
          services.js       --> root services file for requirejs
          DataService.js    --> a sample $Resource service that fetchs data for the _data_ view
        widgets/
          widgets.js        --> root widgets file for requirejs
        lib/              --> angular and 3rd party javascript libraries
          angular/
            angular.js            --> wraps angularjs in a requirejs module
            angular.min.js        --> the latest minified angular js
            angular-ie-compat.js  --> angular patch for IE 6&7 compatibility
          console/
            console.js            --> wraps console in a requirejs module
            console.min.js        --> the minified source for our console logger
          jquery/
            jquery.js             --> wraps jquery in a requirejs module
            jquery.min.js         --> the latest minified source for jquery
          underscore/
            underscore.js         --> wraps underscore in a requirejs module
            underscore-min.js     --> the latest minified source for underscore
          modernizer-2.0.6.min.js --> modernizer so that out html5 elements load in <ie9
        _boilerplate.js   --> a starting file for any module you create
        app.js            --> root application load logic - this is where angularjs is initialized
        bootstrap.js      --> the bootstrap of our application - handles loading initial dependancies
        order.js          --> plugin for requirejs to allow specifying script load order
        require.js        --> requirejs source
      
      mock/             --> mocked RESTful server calls
        data/
          list.json

      templates/        --> angular view partials (partial html templates)
        Data.xhtml
        Home.xhtml

    config/jsTestDriver.conf    --> config file for JsTestDriver

    logs/               --> JSTD and other logs go here (git-ignored)

    scripts/            --> handy shell/js/ruby scripts
      test-server.bat   --> starts JSTD server (windows)
      test-server.sh    --> starts JSTD server (*nix)
      test.bat          --> runs all unit tests (windows)
      test.sh           --> runs all unit tests (*nix)
      watchr.rb         --> config script for continuous testing with watchr
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
        jasmine/                --> Pivotal's Jasmine - an elegant BDD-style testing framework
        jasmine-jstd-adapter/   --> bridge between JSTD and Jasmine
        jstestdriver/           --> JSTD - JavaScript test runner
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
