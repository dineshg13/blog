require.config({
  shim: {
    'DS': {
      deps: ['ember'],
      exports: 'DS'
    },
    'modernizr': {
      exports: 'Modernizr'
    },
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember',
      init: function() {
        return this;
      }
    }

  },

  paths: {
    jquery: '../components/jquery/jquery',
    ember: '../components/ember-data/dist/modules/ember',
    handlebars: '../components/handlebars/handlebars',
    DS: '../components/ember-data/dist/ember-data',
    modernizr: '../components/modernizr/modernizr',
    text:'../components/text/text',
    moment:'../components/moment/moment',
    showdown:'../components/showdown/src/showdown'

  }
});

require(['app/app','jquery'], function(app,$) {
  // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});