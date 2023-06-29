
var stars = document.querySelectorAll('.BHOKXe');
for (let star of stars) {
  var div=document.createElement("div");
  star.appendChild(div);
  div.innerText= star.ariaLabel;

}
