
var template="";
function sc_pb_app_error()
{
}
function scLoadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      };
    };
  } else {
    script.onload = function() {
      callback();
    };
  };
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};
var scjQueryPB;
var product_select_index = 0;
scLoadScript("//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js", function() {
		scjQueryPB = jQuery.noConflict(true);
		scjQueryPB("#sc_pb_css").attr("href", "/apps/product-desc-tabs/scripts/css/pb.css");
  if(sc_pb_app_process)sc_pb_app_process(scjQueryPB);
});