
var dmp = new diff_match_patch();

function diff(text1, text2) {
  var d = dmp.diff_main(text1, text2);
  dmp.diff_cleanupSemantic(d);
  return dmp.diff_prettyHtml(d);
}

function launch() {
  var text1 = $("#text1").val();
  var text2 = $("#text2").val();
  var ds = diff(text1, text2);
  $("#outputdiv").html(ds);
}

var launchButton = $("#launch").click(launch);

launch();