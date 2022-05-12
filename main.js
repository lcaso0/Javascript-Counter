window.number = 0 //global variable

/* minus event */
document.getElementById("minus").onclick = function() {
  if (window.number == 0) {
    return
  }
  else {
    window.number = window.number - 1;
    document.getElementById("number").innerHTML = window.number
  }
}

/* Plus event */
document.getElementById("plus").onclick = function() {
  window.number = window.number + 1;
  document.getElementById("number").innerHTML = window.number
}

/* Reset event */
document.getElementById("reset").onclick = function() {
  window.number = 0;
  document.getElementById("number").innerHTML = 0
}