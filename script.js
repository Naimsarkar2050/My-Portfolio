var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// js for manu bar

var sidemenu = document.getElementById("sidemenu");
function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-200px";
}

// data send to google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxyufzh6NSgpRq3Q8JoKsiTKdcBKpwmTIMJv1vlAr0R7qWi1OvXKgX_aKhx6kUlMvXN/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message send successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});



