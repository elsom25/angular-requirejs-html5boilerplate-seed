define([
  'text!templates/Home.html',
  'text!templates/Data.html'
],function(homeTemplate,dataTemplate){
  return {
    home: {
      title: 'Home'
      , route: '/home'
      , controller: 'home'
      , template: homeTemplate
    }
    , creation: {
      title: 'Data List'
      , route: '/data'
      , controller: 'data'
      , template: dataTemplate
    }
  };
})
