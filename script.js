// let togglebtn = document.getElementById("toggle-btn");
// let body = document.body;

// togglebtn.addEventListener("click", function(){
//     body.classList.toggle("dark-mode");
// })

$(".form-check-input").click(function () {
  $("button,h1, h2, h4, h5, p, a").toggleClass("change-text");
  $("body").toggleClass("toggle-btn");
});
