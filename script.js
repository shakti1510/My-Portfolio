document.addEventListener("DOMContentLoaded", function () {
  var typeData = new Typed(".role", {
    strings: [
      "Coder",
      "Software Developer",
      "Full Stack Developer",
      "Web Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 0,
  });
});
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_02qdukl";
  const templateID = "template_akmd2q5";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
