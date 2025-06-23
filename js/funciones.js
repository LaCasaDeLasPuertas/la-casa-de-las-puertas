document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const clearButtons = document.querySelectorAll("#clear-filters, #clear-filters-mobile");
  const tarjetas = document.querySelectorAll(".tarjeta");
  const mobileFilters = document.getElementById("mobile-filters");

  let filtrosSeleccionados = [];

  // Función para aplicar filtros
  const aplicarFiltros = () => {
    tarjetas.forEach(tarjeta => {
      const etiquetas = Array.from(tarjeta.querySelectorAll("span")).flatMap(span =>
        Array.from(span.classList)
      );

      const cumpleTodos = filtrosSeleccionados.every(filtro =>
        etiquetas.includes(filtro)
      );

      tarjeta.style.display = cumpleTodos ? "flex" : "none";
    });
  };

  // Activar / desactivar filtros
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filtro = button.dataset.filter.toLowerCase();

      if (filtrosSeleccionados.includes(filtro)) {
        filtrosSeleccionados = filtrosSeleccionados.filter(f => f !== filtro);
        button.classList.remove("bg-[#1a1a1a]", "text-white", "border-[#1a1a1a]", "shadow-md");
      } else {
        filtrosSeleccionados.push(filtro);
        button.classList.add("bg-[#1a1a1a]", "text-white", "border-[#1a1a1a]", "shadow-md");
      }

      aplicarFiltros();
    });
  });

  // Limpiar filtros
  clearButtons.forEach(clearBtn => {
    clearBtn.addEventListener("click", () => {
      filtrosSeleccionados = [];

      filterButtons.forEach(button =>
        button.classList.remove("bg-[#1a1a1a]", "text-white", "border-[#1a1a1a]", "shadow-md")
      );

      tarjetas.forEach(tarjeta => {
        tarjeta.style.display = "flex";
      });
    });
  });

  // Mostrar/ocultar filtros móviles
  window.toggleMobileFilters = () => {
    mobileFilters.classList.toggle("hidden");
  };
});




    const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  // Toggle menú
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Espera 100ms antes de ocultar el menú, para que el scroll funcione bien
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 100);
    });
  });
