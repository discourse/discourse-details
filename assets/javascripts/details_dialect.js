(function() {
  function replaceDetails(text) {
    while (text != (text = text.replace(/\[details=([^\]]+)\]((?:(?!\[details=[^\]]+\]|\[\/details\])[\S\s])*)\[\/details\]/ig, function(_, summary, details) {
      return "<details><summary>" + summary + "</summary>" + details + "</details>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceDetails);
})();
