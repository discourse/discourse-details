(function() {
  function replaceDetails(text) {
    while (text != (text = text.replace(/\[details=([^\]]+)\]((?:(?!\[details=[^\]]+\]|\[\/details\])[\S\s])*)\[\/details\]/ig, function(_, summary, details) {
      return "<details><summary>" + summary + "</summary>" + details + "</details>";
    })));

    // add new lines to make sure we *always* have a <p> element after </summary> and before </details>
    // otherwise we can't hide the content since we can't target text nodes via CSS
    text = text.replace(/<\/summary>/ig, "</summary>\n\n");
    text = text.replace(/<\/details>/ig, "\n\n</details>");

    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceDetails);
})();
