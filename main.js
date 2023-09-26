
function filterSkills() {
  var input = document.getElementById('filter');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('skill-elements');
  var li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    var textP = li[i].getElementsByTagName('p')[0];
    var textValue = textP.textContent || textP.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = 'block';
    } else {
      li[i].style.display = 'none';
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var skillsLink = document.querySelector('a[href="#skills"]');
  var contactLink = document.querySelector('a[href="#contact"]');
  var introductionLink = document.querySelector('a[href="#introduction"]'); // Nueva línea
  var skillsContent = document.getElementById('skills-content');
  var contactContent = document.getElementById('contact-content');
  var introductionContent = document.getElementById('introduction-content'); // Nueva línea

  skillsLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllContent();
    skillsContent.classList.remove('hidden');
  });

  contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllContent();
    contactContent.classList.remove('hidden');
  });

  introductionLink.addEventListener('click', function (e) { // Nueva función para "Introduction"
    e.preventDefault();
    hideAllContent();
    introductionContent.classList.remove('hidden');
  });

  function hideAllContent() {
    skillsContent.classList.add('hidden');
    contactContent.classList.add('hidden');
    introductionContent.classList.add('hidden');
  }
});