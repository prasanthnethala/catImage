function switchoff() {
  document.getElementById("Bulbimage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catimage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("heading").textContent = "swiched off";
  document.getElementById("switchoff").style.backgroundColor = "green";
  document.getElementById("switchon").style.backgroundColor = "red";
}

function switchon() {
  document.getElementById("Bulbimage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catimage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("heading").textContent = "Switched on";
  document.getElementById("switchon").style.backgroundColor = "blue";
  document.getElementById("switchoff").style.backgroundColor = "yellow";
}
