document.addEventListener('DOMContentLoaded', function () {
  var skillsLink = document.querySelector('a[href="#skills"]')
  var contactLink = document.querySelector('a[href="#contact"]')
  var introductionLink = document.querySelector('a[href="#introduction"]')
  var projectsLink = document.querySelector('a[href="#projects"]')
  var experienceLink = document.querySelector('a[href="#experience"]')
  var skillsContent = document.getElementById('skills-content')
  var contactContent = document.getElementById('contact-content')
  var introductionContent = document.getElementById('introduction-content')
  var projectsContent = document.getElementById('projects-content')
  var experienceContent = document.getElementById('experience-content')
  var footer = document.querySelector('footer')

  skillsLink.addEventListener('click', function (e) {
    e.preventDefault()
    hideAllContent()
    skillsContent.classList.remove('hidden')
    setTimeout(function () {
      skillsContent.style.opacity = 1
      footer.style.opacity = 1 // Mostrar el footer
    }, 100)
  })

  contactLink.addEventListener('click', function (e) {
    e.preventDefault()
    hideAllContent()
    contactContent.classList.remove('hidden')
    setTimeout(function () {
      contactContent.style.opacity = 1
      footer.style.opacity = 1 // Mostrar el footer
    }, 100)
  })

  introductionLink.addEventListener('click', function (e) {
    e.preventDefault()
    hideAllContent()
    introductionContent.classList.remove('hidden')
    setTimeout(function () {
      introductionContent.style.opacity = 1
      footer.style.opacity = 1 // Mostrar el footer
    }, 100)
  })

  projectsLink.addEventListener('click', function (e) {
    e.preventDefault()
    hideAllContent()
    projectsContent.classList.remove('hidden')
    setTimeout(function () {
      projectsContent.style.opacity = 1
      footer.style.opacity = 1 // Mostrar el footer
    }, 100)
  })

  experienceLink.addEventListener('click', function (e) {
    e.preventDefault()
    hideAllContent()
    experienceContent.classList.remove('hidden')
    setTimeout(function () {
      experienceContent.style.opacity = 1
      footer.style.opacity = 1 // Mostrar el footer
    }, 100)
  })

  function hideAllContent() {
    skillsContent.classList.add('hidden')
    contactContent.classList.add('hidden')
    introductionContent.classList.add('hidden')
    projectsContent.classList.add('hidden')
    experienceContent.classList.add('hidden')
    skillsContent.style.opacity = 0
    contactContent.style.opacity = 0
    introductionContent.style.opacity = 0
    projectsContent.style.opacity = 0
    footer.style.opacity = 0 // Ocultar el footer
  }
})
