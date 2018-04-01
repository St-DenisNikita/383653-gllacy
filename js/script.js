(function () {
   var link = document.querySelector(".feedback-button");
   var popup = document.querySelector(".feedback-popup");
   var close = popup.querySelector(".close-button");
   var form = popup.querySelector("form");
   var login = popup.querySelector("[name=feedback-user-name]");
   var email = popup.querySelector("[name=feedback-user-email]");
   link.addEventListener("click", function (evt) {
    popup.classList.add("modal-show");
    login.focus();
  });
   close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
   form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
})();