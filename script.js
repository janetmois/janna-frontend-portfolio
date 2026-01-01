// для анимациии (начало)
/* ---- particles.js config ---- */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#000000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 80,
        height: 100,
      },
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#000000",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 200,
        rotateY: 800,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 1400,
        size: 10,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
// для анимациии (конец)
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector("#container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    container.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    container.classList.remove("active");
}))
/* кнопка для показа остального контента */
document.getElementById('toggleButton').addEventListener('click', function(){
  const moreContent = document.getElementById('moreContent');
  const button = document.getElementById('toggleButton');

  moreContent.classList.toggle('show-more');

  if (moreContent.classList.contains('show-more')){
    button.textContent = "Close";
  }
  else {
    button.textContent = "See more"
  }
})
const toggleButton = document.getElementById('toggleButton');
const rect = toggleButton.querySelector('rect');

toggleButton.addEventListener('mouseover', () => {
  // Сбрасываем анимацию
  rect.style.animation = 'none';
  rect.offsetHeight; // триггер перерисовки
  rect.style.animation = null; // затем включаем снова
});

// const button = document.getElementById("toggleButton");

// button.addEventListener("click", () => {
//   // активируем кнопку один раз
//   button.classList.add("activated");
// });
// const button = document.getElementById("toggleButton");
// const rect = button.querySelector("rect");
// const content = document.getElementById("content"); // сворачиваемый блок

// button.addEventListener("click", () => {
//   // логика сворачивания контента
//   content.classList.toggle("hidden");

//   // ПЕРЕЗАПУСК анимации
//   rect.style.animation = "none";
//   rect.getBoundingClientRect(); // reflow
//   rect.style.animation = "";
// });