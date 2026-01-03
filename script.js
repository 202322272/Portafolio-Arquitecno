/* =========================
   UTILIDADES GENERALES
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* Año automático en footer */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Menú móvil */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
      });
    });
  }

  /* Marcar link activo según página */
  const navLinks = document.querySelectorAll(".nav__link");
  const path = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (href === "index.html" && path === "")) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });

});


/* =========================
   DATOS DE PROYECTOS (MODAL)
========================= */
const projects = {
  1: {
    title: "Proyecto 01",
    img: "./assets/img/Project01.jpg",
    desc: "Proyecto desarrollado desde la etapa conceptual hasta la documentación ejecutiva, coordinando especialidades y asegurando control de calidad."
  },
  2: {
    title: "Proyecto 02",
    img: "./assets/img/Project02.jpg",
    desc: "Planeación ejecutiva del proyecto, control de tiempos y costos, coordinación técnica y seguimiento de entregables."
  },
  3: {
    title: "Proyecto 03",
    img: "./assets/img/Project03.jpg",
    desc: "Diseño interior enfocado en funcionalidad, experiencia del usuario y criterios estéticos alineados al proyecto."
  },
  4: {
    title: "Proyecto 04",
    img: "./assets/img/Project04.jpg",
    desc: "Supervisión de obra y validación en sitio, control de avances, calidad y cumplimiento contra proyecto."
  },
  5: {
    title: "Proyecto 05",
    img: "./assets/img/Project05.jpg",
    desc: "Gestión y control documental del proyecto, organización de información, revisiones y trazabilidad."
  },
  6: {
    title: "Proyecto 06",
    img: "./assets/img/Project06.jpg",
    desc: "Optimización de procesos constructivos y costos, análisis de alternativas y control de recursos."
  },
  7: {
    title: "Proyecto 07",
    img: "./assets/img/Project07.jpg",
    desc: "Coordinación técnica y multidisciplinaria, integración de especialidades y resolución de interferencias."
  },
  8: {
    title: "Proyecto 08",
    img: "./assets/img/Project08.jpg",
    desc: "Cierre administrativo y entrega final del proyecto, punch list, documentación final y entrega al cliente."
  }
};


/* =========================
   FUNCIONES MODAL
========================= */
function openProject(id) {
  const p = projects[id];
  if (!p) return;

  const modal = document.getElementById("projectModal");
  const img = document.getElementById("modalImg");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");

  img.src = p.img;
  img.alt = p.title;
  title.textContent = p.title;
  desc.textContent = p.desc;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}


/* =========================
   CERRAR MODAL CON ESC
========================= */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProject();
  }
});