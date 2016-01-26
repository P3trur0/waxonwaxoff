Stamplay.init("waxonwaxoff");
var links = new Stamplay.Cobject('link').Collection;

$(document).ready(function() {
  executionLogic();
});


function getLinks(query, successFn, errorFn) {
    links.fetch(query)
    .then(function() {
      successFn(links);
    }, function(error) {
      errorFn(error);
    });
}

var executionLogic = function() {
  var query = {};

  var resultOkDiv = "#resourcesList";

  var okCallback = function(res) {

    $(resultOkDiv).html('');
    var data = new Array();
    res.instance.forEach(function (linkRes) {
      var linkElement = {link: {
        title: linkRes.get('title'),
        description: linkRes.get('description'),
        href: linkRes.get('href')
      }}
      data.push(linkElement);
  });
    Utils.renderTemplate('resources',data,resultOkDiv);
  };
  var koCallback = function(error) {
    $(resultOkDiv).html('');
    alert(res);
  };

  getLinks(query,okCallback,koCallback);
}
