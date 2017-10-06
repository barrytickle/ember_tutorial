import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    'save-highscore': function(name, score){

      var controller = this;
      var highscore = controller.store.createRecord('highscore', {
        name:name,
        score:score
      });
      controller.transitionToRoute('highscores');
      highscore.save().then(function(){
        controller.store.unloadAll();
        controller.transitionToRoute('highscores');
      });

    }
  }
});
