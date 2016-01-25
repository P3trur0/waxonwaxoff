function Utils() {}

Utils.renderTemplate = function(templateName, data, destDomElement) {
    $.Mustache.load("./views/templates/templates.html").done(function(){
      $(destDomElement).mustache(templateName,data);

      $('code').each(function(i, block) {
         hljs.highlightBlock(block);
       });
      }
    );
};
