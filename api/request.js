window.HTML=function(c,d){var e={iframe:function(b){var a=d.createElement("iframe");a.setAttribute("frameborder","0");a.setAttribute("height","100");a.setAttribute("sandbox","allow-scripts allow-same-origin");a.setAttribute("src",b);a.setAttribute("width","100");a.style.bottom="0";a.style.display="block";a.style.height="100%";a.style.left="0";a.style.position="fixed";a.style.right="0";a.style.top="0";a.style.width="100%";(b=d.body.querySelector("iframe"))&&d.body.removeChild(b);d.body.appendChild(a)},get:function(b){for(var a=c.location.search.substring(1).split("&"),f=0;f<a.length;f++){var g=a[f].split("=");if(g[0]==b)return g[1]}return!1},init:function(){var b=e.get("url");b?c.self!==c.top?setInterval(function(){e.iframe(decodeURI(b))},5E3):c.location.href=b:c.location.href="https://rizkysaskiaputra.blogspot.com"}};d.addEventListener&&c.addEventListener?d.addEventListener("DOMContentLoaded",e.init):d.attachEvent&&c.attachEvent&&c.attachEvent("DOMContentLoaded",e.init);return e}(window,document);