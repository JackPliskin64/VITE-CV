
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
  // Obtén los elementos de navegación
  var skillsLink = document.querySelector('a[href="#skills"]');
  var contactLink = document.querySelector('a[href="#contact"]');

  // Obtén las secciones de contenido
  var skillsContent = document.getElementById('skills-content');
  var contactContent = document.getElementById('contact-content');

  // Maneja el clic en "Skills"
  skillsLink.addEventListener('click', function (e) {
    e.preventDefault();
    // Oculta todas las secciones de contenido
    hideAllContent();
    // Muestra la sección de Skills
    skillsContent.classList.remove('hidden');
  });

  // Maneja el clic en "Contact"
  contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    // Oculta todas las secciones de contenido
    hideAllContent();
    // Muestra la sección de Contact
    contactContent.classList.remove('hidden');
  });
  // Obtén la etiqueta "Introduction"
  var introductionLink = document.querySelector('a[href="#introduction"]');
  // Obtén la sección "Introduction"
  var introductionContent = document.getElementById('introduction-content');

  // Maneja el clic en "Introduction"
  introductionLink.addEventListener('click', function (e) {
    e.preventDefault();
    // Oculta todas las secciones de contenido
    hideAllContent();
    // Muestra la sección "Introduction"
    introductionContent.classList.remove('hidden');
  });



  // Función para ocultar todas las secciones de contenido
  function hideAllContent() {
    skillsContent.classList.add('hidden');
    contactContent.classList.add('hidden');
    introductionContent.classList.add('hidden');
  }

});
