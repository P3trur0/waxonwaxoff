Stamplay.init("waxonwaxoff");
var exercises = new Stamplay.Cobject('exercise').Collection;


function getExercises(query, successFn, errorFn) {
    exercises.fetch(query)
    .then(function() {
      successFn(exercises);
    }, function(error) {
      errorFn(error);
    });
}

var executionLogic = function(exerciseType) {
  var query = {
    type : exerciseType
  }

  var resultOkDiv = "#"+exerciseType+"OkDiv";
  var resultKoDiv = "#"+exerciseType+"KoDiv";

  var okCallback = function(res) {
    $(resultOkDiv).html('');

    var data = new Array();

    var count = 1;
    res.instance.forEach(function (exer) {
      var exercise = {
        counter: count,
        title: exer.get('title'),
        description: exer.get('description'),
        href: "http://ideone.com/fork/"+exer.get('href'),
        code: exer.get('code'),
        tags: exer.get('tags')
      }

      exercise.code = exercise.code.split("<br>");

      data.push(exercise);
      count++;
  });
    Utils.renderTemplate('exercise',data,resultOkDiv);
  };
  var koCallback = function(error) {
    $(resultOkDiv).html('');
    alert(res);
  };

  var getExercisesExec = function() {
    getExercises(query,okCallback,koCallback);
  }

  return getExercisesExec;
}

var baseExercisesRetrieval = executionLogic("base");
var midExercisesRetrieval = executionLogic("mid");
var hardExercisesRetrieval = executionLogic("hard");
