// Añadir este archivo JavaScript para los efectos de scroll
document.addEventListener("DOMContentLoaded", () => {
  // Efecto de desvanecimiento al hacer scroll
  const fadeElements = document.querySelectorAll(".fade-scroll")

  function checkFade() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible")
      }
    })
  }

  window.addEventListener("scroll", checkFade)
  checkFade() // Verificar elementos visibles al cargar
})

