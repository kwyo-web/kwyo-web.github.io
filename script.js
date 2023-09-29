function openDrawerMenu(){
    var x = document.getElementById("mainNav");
    if (x.className === "navBar"){
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }