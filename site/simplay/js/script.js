// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              document.querySelector("#app_name")
                .textContent =  res.app_name;
              document.querySelector("#title")
                .textContent =  res.title;

              var bullet_list = res.info_bullets;
              var info_bullets = document.getElementById("bullets_list");
              for (var i = 0; i < bullet_list.length; ++i) {
                info_bullets.innerHTML += "<li>" + bullet_list[i] + "</li>";
              }

              document.querySelector("#info")
                .textContent =  res.info;

            });
  var vid = document.getElementById("video");
  vid.volume = 0.05;
  
  }
);





