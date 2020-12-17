function setSkills(skillsUl) {
  var skills = skillsUl.querySelectorAll("a");
  var size = 70*1.5;
  var R = (size/2)/Math.tan(Math.PI/skills.length)/Math.cos(Math.PI/skills.length);
  skillsUl.style.height = 2*R + 70 + "px";
  skillsUl.style.width = 2*R + 70 + "px";
  // var r = R*Math.cos(Math.PI/skills.length);
  Array.from(skills).forEach((element, index) => {
    element.style.left = R + R*Math.cos(2*Math.PI*index/skills.length) + "px";
    element.style.top = R + R*Math.sin(2*Math.PI*index/skills.length) + "px";
    element.addEventListener("click", function(e) {
      e.preventDefault();
      element.classList.add("active");
      setTimeout(() => {
        window.location.href = element.getAttribute("href");
      }, 800);
    });
  });
}

document.addEventListener("DOMContentLoaded", function (e) {
  if (canUseWebP()) document.body.classList.add("webp");
  else document.body.classList.add("no-webp");
});

window.addEventListener("load", function (e) {
  var skillsUl = document.querySelector(".skills");
  if (skillsUl) setSkills(skillsUl);
});

function canUseWebP() {
  var elem = document.createElement("canvas");
  if (!!(elem.getContext && elem.getContext("2d"))) {
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }
  return false;
}
