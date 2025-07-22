var isMobileApp = false;
var isApp = false;
var isDesktop = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null;

var isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var urlChrome = "https://chrome.google.com/webstore/detail/bonziworld/naiglhkfakaaialhnjabkpaiihglgnmk";

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
var urlGPlay = "https://play.google.com/store/apps/details?id=com.jojudge.bonziworld";

$(function() {
  var support = {
    AudioContext: {
      supported: typeof (
            window.AudioContext ||
            window.webkitAudioContext
          ) != "undefined",
      message: "Your browser does not support the Web Audio API."
    }
  };

  var supported = true;
  var supportKeys = Object.keys(support);
  for (var i = 0; i < supportKeys.length; i++) {
    var key = supportKeys[i];
    var obj = support[key];
    supported = supported && obj.supported;
    if (!obj.supported) 
      $("#unsupp_reasons").append(
        "<li>" + obj.message + "</li>"
      );
  }

  if (!supported) {
    $("#page_unsupp").show();
  }

  // if (isChromeBrowser && isDesktop) {
  // 	$(".app_showcase").append(
  // 		'<a class="app_chrome" href="' + urlChrome + '">' +
  // 			'<img src="./img/app/chrome.png" alt="Chrome App" />' +
  // 		'</a>'
  // 	);
  // }
  var r = 1;

  if (r == 1) {
    $(".app_showcase").append(
      '<a class="app_android" onclick="window.location.reload()">' +
        '<img src="./img/app/desktop.png" alt="5 12 2021" />' +
      '</a>'
    );
  }
});