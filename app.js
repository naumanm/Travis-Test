window.onload = function() {

  function main() {
    showCurrentVersion();
  }

  function showCurrentVersion() {
    var baseHref = document.getElementsByTagName('base')[0].href;
    document.getElementById('title').innerHTML = "Current version: " + baseHref;
    console.log(baseHref);
  }

  main();

};