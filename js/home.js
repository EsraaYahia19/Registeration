let welcomehome= document.querySelector(".welcome h1")
let logbtn=document.getElementById("logoutbtn")
let sessionhome= JSON.parse(sessionStorage.getItem("filteruser"))

  welcomehome.innerHTML="welcome" + " "+sessionhome[0].name

  logbtn.addEventListener("click",function(){
    window.location.href="https://esraayahia19.github.io/Registeration/index.html"

  })